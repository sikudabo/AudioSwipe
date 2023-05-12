import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { colors } from '../../../components';
import { deviceBreakPointsMaxWidth } from '../../../utils/breakpoints';
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
    }
   }

    .stepper-container {
        justify-content: center;
        display: flex;
        padding-left: 20px;
        padding-top: 10px;
        width: 100vw;
    }

    @media ${deviceBreakPointsMaxWidth.mobileL} {
        .stepper-container {
           display: none;
        }
    }

    @media ${deviceBreakPointsMaxWidth.mobileL} {
        .back-next-button-row {
            display: none;
        }
    }

    .css-1f75pcl-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
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
`;