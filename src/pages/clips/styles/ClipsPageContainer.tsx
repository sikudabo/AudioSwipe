import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../../components';

export const ClipsPageContainer = styled(Grid)`
    background-color: ${colors.hotPink};
    height: 100vh;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;

    .top-clips-page-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 100px;

        .top-clips-page-header-text {
            justify-self: center;
            color: ${colors.white};
            font-size: 32px;
            font-weight: 900;
        }
    }
`;