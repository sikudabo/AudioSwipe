import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../../components';
import { deviceBreakPointsMaxWidth } from '../../../utils/breakpoints';
const UploadBackground = require('../../../audio-media/upload-test.jpeg');

export const ArtistSongUploadPageContainer = styled(Grid)`
    background: url(${UploadBackground});
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    max-width: 100vw;
    padding-top: 100px;

    .css-klllbb {
        padding-bottom: 0;
    }

    .form-paper-wrapper {
        background-color: ${colors.white};
        border-radius: 5px;
        margin: 0;
        height: 60vh;
        opacity: 0.9;
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
            width: 100%;

            .album-cover-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                .album-cover-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 75vw;
                }
            }
    
            .song-name-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                padding-left: 10px;
                padding-right: 10px;
                width: 50vw;
            }

            .album-name-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                padding-left: 10px;
                padding-right: 10px;
                width: 50vw;

                @media ${deviceBreakPointsMaxWidth.tablet} {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 75vw;
                }
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                padding-left: 5px;
                padding-right: 5px;

                .song-name-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 75vw;
                }
            }
        }
    }
`;