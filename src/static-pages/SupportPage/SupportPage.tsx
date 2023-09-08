import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../components';

const SupportPageContainer = styled(Grid)`
    background-color: ${colors.primary};
    height: 100%;
    overflow: scroll;
    padding-bottom: 50px;
    width: 100vw;

    p {
        color: ${colors.white};
    }

    .privacy-policy-header-container {
        display: flex;
        justify-content: center;
        padding-top: 100px;
        width: 100vw;

        .privacy-policy-header-text {
            align-self: center;
            font-size: 42px;
            font-weight: 900;
        }
    }

    .privacy-policy-body-section {
        padding-left: 20px;
        padding-right: 20px;

        p {
            font-size: 28px;
            font-weight: 700;
        }
    }
`;

export default function SupportPage() {
    return (
        <SupportPageContainer container>
            <div className="privacy-policy-header-container">
                <p className="privacy-policy-header-text">
                    Support
                </p>
            </div>
            <div className="privacy-policy-body-section">
                <p>For support issues, please contact us at <a href="https://www.audioswipe.io/contact">on our contact page.</a></p>
            </div>
        </SupportPageContainer>
    );
}