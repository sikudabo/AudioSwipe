import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';
import { colors } from '../../components';
import { deviceBreakPointsMaxWidth } from '../../utils/helpers';
import SwipePhoto from '../../audio-media/swipe-photo.jpeg';

const ListenerSignUpPageContainer = styled(Grid)`
    background-color: ${colors.white};
    height: 100%;
    padding-top: 50px;

    p {
        color: ${colors.white};
    }

    .mobile-app-section {
        background-color: ${colors.hotPink};

        .mobile-app-text-section {
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            .mobile-app-header-text {
                padding-top: 50px;
                font-size: 32px;
                font-weight: 700;
            }

            .mobile-app-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .mobile-app-image-section {
            padding-top: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }
    }
`;

export default function ListenerSignUpPage() {
    return (
        <ListenerSignUpPageContainer>
            <Grid className="mobile-app-section" columnSpacing={0} container>
                <Grid className="mobile-app-text-section" md={6} sm={12} container>
                    <p className="mobile-app-header-text">
                        Download our mobile app
                    </p>
                    <p className="mobile-app-body-text">
                        You need to download our mobile app to sign up for AudioSwipe or sign in. Fans who want to find new content can download the mobile app for AudioSwipe from the Google Play Store or 
                        the Apple App Store. Our application enables you to find new music, podcasts 
                        and audiobooks to add to your collection of audio content. Our website is primarily 
                        built for artists to upload their content, and our mobile app is designed for fans 
                        to listen to the amazing content these authors produce with a beautiful UI that makes 
                        engaging with the audio seamless for the listener. If you want to discover new artits;
                        AudioSwipe is the platform for you. 
                    </p>
                </Grid>
                <Grid className="mobile-app-image-section" md={6} sm={12}>
                    <img alt="Audioswipe App Swiping" aria-label="AudioSwipe App Swiping" src={SwipePhoto} />
                </Grid>
            </Grid>
        </ListenerSignUpPageContainer>
    );
}