import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { colors } from '../../../components';
import ArtistLoginBackground from '../../../audio-media/performing.jpeg';
import { deviceBreakPointsMaxWidth } from '../../../utils/breakpoints';

export const ArtistLoginContainer = styled(Grid)`
    background: url(${ArtistLoginBackground});
    background-size: cover;
    height: 100vh;
    justify-content: center;
    max-width: 100vw;
    padding-top: 100px;

    .form-paper-wrapper {
        background-color: ${colors.white};
        margin: 0;
        height: 60vh;
        opacity: 0.8;
        width: 50vw;

        @media ${deviceBreakPointsMaxWidth.mobileL} {
            height: 450px;
            padding-left: 5px;
            padding-right: 5px;
            width: 95vw;
        }

        .form-header-text-container {
            text-align: center;

            .form-header-text {
                color: ${colors.secondary};
                font-size: 40px;
                font-weight: 900;
            }
        }

        .form-content-container {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 20px;
            padding-right: 20px;
            width: 100%;
    
            .username-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                padding-left: 5px;
                padding-right: 5px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                padding-left: 5px;
                padding-right: 5px;

                .username-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 95vw;
                }
            }

            .password-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                padding-left: 5px;
                padding-right: 5px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                padding-left: 5px;
                padding-right: 5px;
                padding-top: 10px;
                
                .password-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 95vw;
                }
            }
        }

        .buttons-container {
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: row;
            gap: 3;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 20px;

            @media ${deviceBreakPointsMaxWidth.tablet} {
                padding-left: 5px;
                padding-right: 5px;
            }

            .confirm-button {
                margin-left: auto;
            }
        }
    }
`   