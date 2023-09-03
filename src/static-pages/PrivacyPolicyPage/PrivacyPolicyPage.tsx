import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../components';

const PrivacyPolicyContainer = styled(Grid)`
    background-color: ${colors.hotPink};
    height: 100%;
    overflow: scroll;
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
        padding-left: 10px;
        padding-right: 10px;

        p {
            font-size: 28px;
            font-weight: 700;
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
            <div className="privacy-policy-body-section">
                <p>1. AudioSwipe allows you to request all of your personal data at any time and it can be sent to you in a digital format. </p>
                <p>2. The personal data we collect is your first name, last name, gender, email, password, age, phone number and an image avatar.</p> 
                <p>3. We use this data for verification purposes and for artists to get demographics data feedback. The artists do not know who you are and personal data like your name, email, phone number and avatar are not shared. Today, only the gender of the person who liked their audio clip is shared.</p>
                <p>4. This data is not shared with third-party sources besides the artists on the platform, and all of the data besides the gender data is obscured from the artist.</p>
                <p>5. We will not share your personal data with third-party advitisers, marketers, organizations or internet service providers unless we are required to by law.</p>

            </div>
        </PrivacyPolicyContainer>
    );
}