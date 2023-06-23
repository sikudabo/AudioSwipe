import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ArtistLoginContainer } from './components/ArtistLoginContainer';
import { ArtistType } from '../../typings';
import { useHandleToastMessage } from '../../utils';
import { AudioSwipeButton } from '../../components';
import { useIsFormLoading } from '../../utils/forms';
import { checkValidEmail, postData } from '../../utils/helpers';
import { useShowToastMessage } from '../../hooks/useShowToastMessage';

type ArtistLoginDisplayLayerProps = {
    handleForgot: (email: string) => void;
    handleLogin: ({ password, username }: ArtistType) => void;
    isForgotOpen: boolean;
    isLoading: boolean;
    setIsForgotOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ArtistLoginPage() {
    return <ArtistLoginPage_DisplayLayer {...useDataLayer()} />;
}

function ArtistLoginPage_DisplayLayer({ handleForgot, handleLogin, isForgotOpen, isLoading, setIsForgotOpen }: ArtistLoginDisplayLayerProps) {
    const [userEmail, setUserEmail] = useState('');
    const { handleSubmit, register } = useForm<ArtistType>({
        defaultValues: {
            password: '',
            username: '',
        },
        mode: 'onChange',
    });

    function onEmailChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setUserEmail(value);
    }

    return (
        <ArtistLoginContainer columns={12} columnSpacing={0} container>
            <Paper className="form-paper-wrapper" elevation={5}>
                <div className="form-header-text-container">
                    <p className="form-header-text">
                        Login
                    </p>
                </div>
                <div className="form-content-container">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <Grid className="username-grid" xs={12}>
                            <TextField
                                aria-label="Username"
                                color="secondary"
                                helperText="Required"
                                label="Username"
                                placeholder="Username"
                                variant="outlined"
                                fullWidth
                                required
                                {...register('username', { required: true })}
                            />
                        </Grid>
                        <Grid className="password-grid" xs={12}>
                            <TextField
                                aria-label="Password"
                                color="secondary"
                                helperText="Required"
                                label="Password"
                                placeholder="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                {...register('password', { required: true })}
                            />
                        </Grid>
                        <div className="buttons-container">
                            <AudioSwipeButton color="error" disabled={isLoading} onClick={() => setIsForgotOpen(true)} variant="contained" text="Forgot ?" type="button" />
                            <AudioSwipeButton className="confirm-button" color="secondary" disabled={isLoading} variant="contained" text="Login" type="submit" />
                        </div>
                    </form>
                </div>
                <Dialog 
                    open={isForgotOpen}
                    onClose={() => setIsForgotOpen(false)}
                >
                    <DialogTitle className="dialog-title">We will fix this</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please reach out to us if you have forgotten your username
                            or password. Send us your email address, allow us to verify 
                            your information; and you will be able to log back in 
                            prompty! 
                        </DialogContentText>
                        <TextField
                            autoFocus
                            color="secondary"
                            margin="dense"
                            id="email"
                            label="Email"
                            onChange={onEmailChange}
                            type="email"
                            fullWidth
                            variant="standard"
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <AudioSwipeButton color="secondary" onClick={() => setIsForgotOpen(false)} text="Cancel" />
                        <AudioSwipeButton color="secondary" onClick={() => handleForgot(userEmail)} text="Send" />
                    </DialogActions>
                </Dialog>
            </Paper>
        </ArtistLoginContainer>
    );
}

function useDataLayer() {
    const { showToastMessage } = useHandleToastMessage();
    const { isLoading, setIsLoading } = useIsFormLoading();
    const [isForgotOpen, setIsForgotOpen] = useState(false);
    const navigate = useNavigate();

    async function handleForgot(email: string) {
        setIsLoading(true);
        if (!checkValidEmail(email)) {
            showToastMessage({
                isError: true,
                message: 'Must enter a valid email address.',
            });
            setIsLoading(false);
            return;
        }

        await postData({
            contentType: 'appllication/json',
            data: {
                email: email.trim(),
            },
            url: 'http://localhost:2000/api/forgotLogin',
        }).then((res: { data: any }) => {
            const { isSuccess, message } = res.data;

            if (!isSuccess) {
                showToastMessage({
                    isError: true,
                    message: 'Error. Please try again!',
                });
                setIsLoading(false);
                return;
            }

            setIsLoading(false);

            showToastMessage({
                isError: false,
                message: message,
            });
            setIsForgotOpen(false);
            navigate('/');
            return;
        }).catch(err => {
            setIsLoading(false);
            showToastMessage({
                isError: true,
                message: 'Error. Please try again!',
            });
        });
    }

    async function handleLogin({ password, username }: ArtistType) {
        setIsLoading(true);
        await postData({ 
            contentType: 'application/json',
            data: {
                password,
                username,
            },
            url: 'http://localhost:2000/api/loginArtist',
        }).then((res: { data: any }) => {
            const { isAuthenticated, message } = res.data;
            if (!isAuthenticated) {
                setIsLoading(false);
                showToastMessage({
                    isError: true,
                    message,
                });
                return;
            }
            setIsLoading(false);
            showToastMessage({
                isError: false,
                message,
            });
            navigate('dashboard/artist');
        }).catch(err => {
            setIsLoading(false);
            showToastMessage({
                isError: true,
                message: 'Error. Please try again!',
            });
        });
    }
    return {
        handleForgot,
        handleLogin,
        isForgotOpen,
        isLoading,
        setIsForgotOpen,
    }
}