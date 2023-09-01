import React, { useState } from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AudioSwipeButton, colors } from '../../components';
import { useHandleToastMessage, useIsFormLoading } from '../../utils/forms';
import { useShowToastMessage } from '../../hooks/useShowToastMessage';
import { checkValidEmail, postData } from '../../utils/helpers';

const ContactContainer = styled(Grid)`
    background-color: ${colors.white};
    height: 100vh;
    padding-top: 50px;
    width: 100vw;

    p {
        color: ${colors.primary}
    }

    .header-container {
        align-items: center;
        display: flex;
        justify-content: center;

        .header-text {
            font-size: 42px;
            font-weight: 700;
        }
    }

    .form-container {
        padding-left: 10px;
        padding-right: 10px;
        width: 100vw;

        .message-container {
            padding-bottom: 20px;
            padding-top: 20px;
        }
    }
`;

export default function ContactPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { isLoading, setIsLoading } = useIsFormLoading();
    const { showToastMessage } = useHandleToastMessage();

    function handleEmailChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setEmail(value);
    }

    function handleMessageChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setMessage(value);
    }

    async function handleSubmit() {
        setIsLoading(true);

        if (message.trim().length === 0) {
            setIsLoading(false);
            showToastMessage({
                isError: true,
                message: 'Please enter a message to send!',
            });
            return;
        }

        if (!checkValidEmail(email)) {
            setIsLoading(false);
            showToastMessage({
                isError: true,
                message: 'Please enter a valid email!',
            });
            return;
        }

        await postData({
            data: {
                email,
                message,
            },
            url: `${process.env.REACT_APP_BASE_URI}api/contact`,
        }).then(response => {
            const { isSuccess, message } = response.data;
            setIsLoading(false);
            if (isSuccess) {
                setEmail('');
                setMessage('');
            }
            showToastMessage({
                isError: !isSuccess,
                message,
            });
        }).catch(() => {
            setIsLoading(false);
            showToastMessage({
                isError: true,
                message: 'There was an error sending that message. Please try again!',
            });
        });
    }

    return (
        <ContactContainer>
            <div className="header-container">
                <p className="header-text">
                    Contact Us 
                </p>
            </div>
            <div className="form-container">
                <TextField
                    aria-label="email"
                    color="primary"
                    helperText='email'
                    label="email"
                    maxRows={4}
                    minRows={4}
                    onChange={handleEmailChange}
                    placeholder="email"
                    type="email"
                    value={email}
                    variant="outlined"
                    fullWidth
                />
                <div className="message-container">
                    <TextField
                        aria-label="Contact Message"
                        color="primary"
                        label="message"
                        maxRows={4}
                        minRows={4}
                        onChange={handleMessageChange}
                        placeholder="message"
                        value={message}
                        variant="outlined"
                        fullWidth
                        multiline
                    />
                </div>
                <AudioSwipeButton 
                    color="primary"
                    disabled={isLoading}
                    onClick={handleSubmit}
                    text="Send"
                    variant="contained"
                    fullWidth
                />
            </div>
        </ContactContainer>
    );
}