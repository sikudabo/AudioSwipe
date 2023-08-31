import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';
import { AudioSwipeButton, colors } from '../../components';
import MagnifyPhoto from '../../audio-media/magnify.jpeg';
import { deviceBreakPointsMaxWidth } from '../../utils/helpers';

const DiscoverPageContainer = styled(Grid)`
    background-color: ${colors.white};
    height: 100%;
    
    p {
        color: ${colors.white};
    }

    .get-noticed-section {
        background-color: ${colors.hotPink};

        .get-noticed-text-section {
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.tablet} {
                width: 100%;
            }

            .get-noticed-header-text {
                padding-top: 50px;
                font-size: 32px;
                font-weight: normal;
            }

            .get-noticed-body-text {
                font-size: 20px;
                font-weight: 700;
            }
        }
    }
`;

export default function DiscoverPage() {
    return (
        <DiscoverPageContainer container>
            <Grid className="get-noticed-section" container columnSpacing={0}>
                <Grid className="get-noticed-text-section" md={6} sm={12} container>
                    <p className="get-noticed-header-text">
                        In Focus: Get Noticed
                    </p>
                    <p className="get-noticed-body-text">
                        AudioSwipe is where Christian audio discovery happens. We give Christian musicians,
                        podcasters and authors the spotlight and tools needed to let your light shine for the 
                        world. We are an accepting platform, so we cater to non-regligious artists with underground 
                        content as long as it is clean and falls within our guidlines. Places like Spotify, YouTube
                        and SoundCloud are so saturated that it can be hard to get noticed. The numbers show that it 
                        is highly unlikely to become a hit on those platforms if you are an underground artist. We 
                        offer the spotlight and tools needed to support the little guy and give them a stage 
                        to share their gifts, knowledge and skills from God with the world. 
                    </p>
                </Grid>
            </Grid>
        </DiscoverPageContainer>
    );
}