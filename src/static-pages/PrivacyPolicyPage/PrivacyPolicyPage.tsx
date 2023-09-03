import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../components';

const PrivacyPolicyContainer = styled(Grid)`
    background-color: ${colors.hotPink};
    height: 100vh;
    overflow: scroll;
    width: 100vw;

    p {
        color: ${colors.white};
    }

    .privacy-policy-header-container {
        align-items: center;
        display: flex;

        .privacy-policy-header-text {
            font-size: 42px;
            font-weight: 900;
        }
    }
`;

export default function PrivacyPolicyPage() {
    return (
        <PrivacyPolicyContainer container>
            <div className="privacy-policy-header-container">
                <p className="privacy-policy-header-text">
                    Privacy Policy
                </p>
            </div>
        </PrivacyPolicyContainer>
    );
}