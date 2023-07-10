import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../../components';

const ArtistDashboardPageContainer = styled(Grid)`
    background-color: ${colors.black};
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;

    .top-artist-banner {
        padding-top: 75px;
        .top-artist-banner-text {
            color: ${colors.white};
            font-size: 32px;
            font-weight: 900;
        }

        margin-bottom: 20px;
    }

    .summary-cards-row {

    }
`;

export default ArtistDashboardPageContainer;
