import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../../components';
import { deviceBreakPointsMaxWidth } from '../../../utils/breakpoints';

export const ArtistSettingsPageContainer = styled(Grid)`
    background-color: ${colors.hotPink};
    padding: 0;
    width: 100%;

    .top-text-container {
        align-items: center;
        display: flex;
        justify-content: center;
        padding-top: 150px;
        width: 100%;

        .top-text {
            color: ${colors.white};
            font-size: 42px;
            font-weight: 900;
        }
    }

    .content-container {
        height: 50vh;
    }

    .form-container {
        display: flex;
        justify-content: center;
        padding-bottom: 150px;
        padding-top: 50px;
        width: 100%;

        .form {
            align-self: center;
            justify-self: center;
            background-color: ${colors.white};
            opacity: 0.8;
            overflow-y: scroll;
            width: 50vw;

            @media ${deviceBreakPointsMaxWidth.tablet} {
                width: 100vw;
            }
    
            .form-header-text-container {
                align-items: center;
                display: flex;
                justify-content: center;
                padding-bottom: 30px;
                padding-top: 20px;
    
                .form-header-text {
                    color: ${colors.hotPink};
                    font-size: 30px;
                    font-weight: 900;
                }
            }

            .first-name-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                padding-left: 5px;
                padding-right: 5px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                .first-name-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 100vw;
                }
            }

            .last-name-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                padding-left: 5px;
                padding-right: 5px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                .last-name-grid {
                    width: 100vw;
                }
            }

            .stage-name-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                .stage-name-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 100vw;
                }
            }

            .bio-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                padding-left: 5px;
                padding-right: 5px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                .bio-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 100vw;
                }
            }

            .avatar-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                .avatar-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 100vw;
                }
            }

            .genre-options-grid {
                margin: 0 auto;
                padding-bottom: 10px;
                padding-left: 5px;
                padding-right: 5px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                .genre-options-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 100vw;
                }
            }

            .artist-type-grid {
                margin: 0 auto;
                padding-bottom: 20px;
                padding-left: 20px;
                padding-top: 50px;
                width: 50vw;
            }
        
            @media ${deviceBreakPointsMaxWidth.tablet} {
                .artist-type-grid {
                    padding-left: 5px;
                    padding-right: 5px;
                    width: 100vw;
                }
            }
        }

        .submit-button-container {
            padding-top: 20px;
            width: 100%;
        }
    }
`;