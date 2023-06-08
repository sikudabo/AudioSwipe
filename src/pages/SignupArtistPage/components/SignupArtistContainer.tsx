import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { colors } from '../../../components';
import { deviceBreakPointsMaxWidth, deviceBreakPointsMinWidth } from '../../../utils/breakpoints';
import RecordsImage from '../../../audio-media/records.jpeg';

export const SignupArtistContainer = styled(Grid)`
    padding-top: 50px;
    max-width: 100vw;

    .top-signup-header {
        align-items: center;
        background: url(${RecordsImage});
        background-size: cover;
        display: flex;
        justify-content: center;
        height: 400px;
        opacity: 0.8;
        width: 100vw;

        .header-text {
            color: ${colors.white};
            font-size: 48px;
            font-weight: 700;
        }
    }

   .form-header-text-container {
    display: flex;
    justify-content: center;
    padding-left: 20px;
    width: 100vw;
    
    .form-header-text {
        font-size: 42px;
        font-weight: 700;
        height: 50px;
    }
   }

   @media ${deviceBreakPointsMaxWidth.tablet} {
    .form-header-text-container {
        margin-bottom: 40px;
    }
}

    .stepper-container {
        justify-content: center;
        display: flex;
        margin-bottom: 50px;
        padding-left: 20px;
        padding-top: 10px;
        width: 100vw;
    }

    @media ${deviceBreakPointsMaxWidth.tablet} {
        .stepper-container {
           display: none;
        }
    }

    /* @media ${deviceBreakPointsMaxWidth.tablet} {
        .back-next-button-row {
            display: none;
        }
    } */

    .css-1f75pcl-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
        color: ${colors.secondary};
    }

    .css-10g0ua6.Mui-active {
        color: ${colors.secondary};
    }

    .css-10g0ua6 {
        color: ${colors.secondary};
    }

    .css-10g0ua6.Mui-completed {
        color: ${colors.secondary};
    }

    .MuiStepIcon-root .Mui-active {
        color: ${colors.secondary};
    }

    .MuiStepLabel-iconContainer {
        color: ${colors.secondary};
    }

    .css-1f75pcl-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
        color: ${colors.secondary};
    }

    .back-next-button-row {
        display: flex;
        justify-content: space-around;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        width: 100vw;
    }

    .form-container {
        padding-top: 20px;
        padding-left: 10px;
        padding-bottom: 30px;
        width: 100vw;
    }
  

    .personal-text-inputs {
        padding-top: 40px;
        margin: 0 auto;
        width: 50vw;
    }

    @media ${deviceBreakPointsMaxWidth.tablet} {
        .personal-text-inputs {
            width: 100vw;
        }
    }

    .form-paper-wrapper {
        margin: 0 auto;
        padding-top: 40px;
    }

    .first-name-grid {
        margin: 0 auto;
        padding-bottom: 20px;
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
        width: 50vw;
    }

    @media ${deviceBreakPointsMaxWidth.tablet} {
        .last-name-grid {
            padding-left: 5px;
            padding-right: 5px;
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

    .username-grid {
        margin: 0 auto;
        padding-bottom: 20px;
        width: 50vw;
    }

    @media ${deviceBreakPointsMaxWidth.tablet} {
        .username-grid {
            padding-left: 5px;
            padding-right: 5px;
            width: 100vw;
        }
    }

    .password-grid {
        margin: 0 auto;
        padding-bottom: 20px;
        width: 50vw;
    }

    @media ${deviceBreakPointsMaxWidth.tablet} {
        .password-grid {
            padding-left: 5px;
            padding-right: 5px;
            width: 100vw;
        }
    }

    .bio-grid {
        margin: 0 auto;
        padding-bottom: 20px;
        width: 50vw;
    }

    @media ${deviceBreakPointsMaxWidth.tablet} {
        .bio-grid {
            padding-left: 5px;
            padding-right: 5px;
            width: 100vw;
        }
    }
    
    .birthday-grid {
        margin: 0 auto;
        padding-bottom: 20px;
        width: 50vw;
    }

    @media ${deviceBreakPointsMaxWidth.tablet} {
        .birthday-grid {
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
        width: 50vw;
    }

    @media ${deviceBreakPointsMaxWidth.tablet} {
        .genre-options-grid {
            padding-left: 5px;
            padding-right: 5px;
            width: 100vw;
        }
    }
`;