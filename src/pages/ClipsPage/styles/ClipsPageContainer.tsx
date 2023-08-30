import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../../components';

export const ClipsPageContainer = styled(Grid)`
    background-color: ${colors.primary};
    height: 100vh;
    padding-left: 0;
    padding-right: 0;
    width: 100%;

    .top-clips-page-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 100px;

        .top-clips-page-header-text {
            justify-self: center;
            color: ${colors.white};
            font-size: 40px;
            font-weight: 900;
        }
    }
`;