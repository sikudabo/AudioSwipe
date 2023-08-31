import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';
import { AudioSwipeButton, colors } from '../../components';
import MagnifyPhoto from '../../audio-media/magnify.jpeg';

const DiscoverPageContainer = styled(Grid)`
    background-color: ${colors.white};
    padding: 0;
    
    p {
        color: ${colors.white};
    }

    .get-noticed-section {
        .get-noticed-header-text {
            font-size: 14px;
            font-weight: normal;
        }
    }
`;

export default function DiscoverPage() {
    return (
        <DiscoverPageContainer container>
            <Grid className="get-noticed-section" md={6} sm={12} container>
                <p className="get-noticed-header-text">
                    Get noticed
                </p>
            </Grid>
        </DiscoverPageContainer>
    );
}