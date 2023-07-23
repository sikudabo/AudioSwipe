import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../../components';

export const ArtistSettingsPageContainer = styled(Grid)`
    background-color: ${colors.hotPink};
    height: 100vh;
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
`;