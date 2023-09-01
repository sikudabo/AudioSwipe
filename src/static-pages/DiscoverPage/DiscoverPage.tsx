import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { AudioSwipeButton, colors } from '../../components';
import DashboardPhoto from '../../audio-media/dashboard-photo.jpeg';
import DataPhoto from '../../audio-media/data-img-2.jpeg';
import MagnifyPhoto from '../../audio-media/magnify.jpeg';
import SwipePhoto from '../../audio-media/swipe-photo.jpeg';
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

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            .get-noticed-header-text {
                padding-top: 50px;
                font-size: 32px;
                font-weight: 700;
            }

            .get-noticed-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .get-noticed-image-section {
            padding-top: 10px;
            img {
                height: 100%;
                width: 100%;
            }
        }
    }

    .data-an-section {

        .data-an-text-container {
            background-color: ${colors.darkBlue};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            .data-an-header-text {
                font-size: 32px;
                font-weight: 700;
            }

            .data-an-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .data-an-img-container {
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }
            
            img {
                height: 100%;
                width: 100%;
            }
        }
    }

    .swipe-section {

        .swipe-section-img-container {
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }

        .swipe-section-text-container {
            background-color: ${colors.primary};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%; 

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            .swipe-section-header-text {
                font-size: 32px;
                font-weight: 700;
            }

            .swipe-section-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }
    }

    .dashboard-section {

        .dashboard-section-img-container {
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }

        .dashboard-section-text-container {
            background-color: ${colors.white};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%; 

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            p {
                color: ${colors.black};
            }

            .dashboard-section-header-text {
                font-size: 32px;
                font-weight: 700;
            }

            .dashboard-section-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }
    }
`;

export default function DiscoverPage() {
    const navigate = useNavigate();

    return (
        <DiscoverPageContainer container>
            <Grid className="get-noticed-section" columnSpacing={0} container>
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
                <Grid className="get-noticed-image-section" md={6} sm={12}>
                    <img alt="Magnifying Glass" aria-label="Magnifying Glass" src={MagnifyPhoto} />
                </Grid>
            </Grid>
            <Grid className="data-an-section" columnSpacing={0} container>
                <Grid className="data-an-img-container" md={6} lg={12}>
                    <img src={DataPhoto} />
                </Grid>
                <Grid className="data-an-text-container" md={6} lg={12}> 
                    <p className="data-an-header-text">
                        Vision: Insights
                    </p>
                    <p className="data-an-body-text">
                        See clearly with our data driven visual insights. 
                        Our graphs and charts give you the data that you need
                        in order to know which of your audio clips is gaining 
                        traction, and which ones fans are losing interest in.
                        Our data driven insights will enable you to optimize your 
                        decisions in order to share your talent with as many fans 
                        as possible. Our charts, graphs, table and cards will allow you
                        to quickly identify how well your audio is engaging with fans.
                    </p>
                </Grid>
            </Grid>
            <Grid className="swipe-section" columnSpacing={0} container>
                <Grid className="swipe-section-text-container" md={6} lg={12}>
                    <p className="swipe-section-header-text">Tinder for Audio</p>
                    <p className="swipe-section-body-text">
                        AudioSwipe is like Tinder for artists that rely on audio to get 
                        their message to the world. The AudioSwipe mobile app allows fans 
                        to discover new audio with 30-second snippets that they can swipe left 
                        or right on in order to either like or dislike the clip. This allows 
                        artists to get real time feedback as to how fans are receiving their 
                        music. Like a modern dating app, you can objectively see what 
                        people think when you upload your audio to AudioSwipe.
                    </p>
                </Grid>
                <Grid className="swipe-section-img-container">
                    <img alt="Swiping song photo" aria-label="Swiping song photo" src={SwipePhoto} />
                </Grid>
            </Grid>
            <Grid className="dashboard-section" columnSpacing={0} container>
                <Grid className="dashboard-section-img-container">
                    <img alt="Swiping song photo" aria-label="Swiping song photo" src={DashboardPhoto} />
                </Grid>
                <Grid className="dashboard-section-text-container" md={6} lg={12}>
                    <p className="dashboard-section-header-text">Modern Dashboard</p>
                    <p className="dashboard-section-body-text">
                        The AudioSwipe artist dashboard allows you to take control of your audio. 
                        You can upload 30-second snippets of your audio, delete the audio, filter 
                        different song based on a set of criteria you set to gain insights, and 
                        get data driven feedback as to how fans are engaging with your audio. The 
                        AudioSwipe dashboard enables you to take control of your career and be seen. 
                        You can find out how many subscribers you have, how many likes you have in a 
                        given month when a fan swipes right, how many dislikes you have when a fan swipes 
                        left for the month and visualizes the insights for you.
                    </p>
                    <div>
                        <AudioSwipeButton color="primary" onClick={() => navigate('/signup/artist')} text="Sign Up Today" type="button" variant="contained" />
                    </div>
                </Grid>
            </Grid>
        </DiscoverPageContainer>
    );
}