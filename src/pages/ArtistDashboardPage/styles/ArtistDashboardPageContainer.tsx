import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { colors } from '../../../components';

const ArtistDashboardPageContainer = styled(Grid)`
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;

    .top-artist-banner {
        .top-artist-banner-text {
            color: ${colors.secondary};
            font-size: 32px;
            font-weight: 900;
        }

        margin-bottom: 20px;
    }

    .summary-cards-row {

    }
`;

export default ArtistDashboardPageContainer;
