import React from 'react';
import styled from '@emotion/styled';
import {
    Button,
    createTheme,
    ImageList,
    ImageListItem,
    ThemeProvider,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
import { imageListLandingItems } from './imageListLandingItems';
import { colors } from '../../components';
import { deviceBreakPointsMaxWidth } from '../../utils/helpers';
import HappyFan from '../../audio-media/happy-fan.jpeg';
import MusicCelebration from '../../audio-media/music-celebration.jpeg';
import OrangeDrummer from '../../audio-media/orange-drummer.jpeg';

const LandingPageContainer = styled(Grid)`
    background-color: ${colors.hotPink};
    width: 100vw;

    .landing-page-header {
        color: white;
        flex-direction: row-reverse;
        padding-top: 100px;
    }

    @media (max-width: 825px) {
        .landing-page-header {
            padding-top: 20px;
        }
    }

    .img {
        height: 100%;
        width: 100%;
    }

    .top-text-header {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        padding-right: 5px;

        .banner-text {
            font-weight: 700;
            font-size: 32px;
            margin-bottom: 4px;
        }

        .header-body-text {
            font-size: 20;
            font-weight: 700;
        }

        .header-text {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 2px;
        }
    }

    .explore-section {
        background-color: ${colors.primary};
        .explore-header-text {
            font-size: 32px;
            font-weight: 700;
        }
    }

    .free-offer-container {
        background-color: ${colors.hotPink};
        display: flex;
        flex-direction: row;
        width: 100vw;

        .free-offer-text-container {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            padding-right: 5px;

            .free-offer-headline-text {
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 2px;
            }

            .free-offer-body-text {
                font-weight: 500;
                font-size: 20px;
            }
        }
    }

    .bottom-button-container {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
    }

    .pad-up {
        margin-top: 20px;
    }

    .prompt-buttons-container {
        display: flex;
    }

    .bottom-img-container {
        padding-top: 0;

        @media(${deviceBreakPointsMaxWidth.mobileL}) {
            padding-top: 20px;
        }
    }
`;

const StyledButton = styled(Button)`
    background-color: ${colors.secondary};

    :hover {
        background-color: ${colors.secondary};
    }
`;

const SecondStyledButton = styled(Button)`
    background-color: ${colors.primary};
    margin-left: 10px;

    :hover {
        background-color: ${colors.primary};
    }
`

export default function LandingPage() {
    const theme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <LandingPageContainer container>
                <Grid className="landing-page-header" columns={12} sx={{ boxShadow: 4 }} container>
                    <Grid md={6} sm={12}>
                        <img alt="Artist Performing" aria-label="A performance artist" className="img" src={OrangeDrummer} />
                    </Grid>
                    <Grid className="top-text-header" md={6} sm={12}>
                        <p className="header-text">
                            LET THE WORLD HEAR YOUR MUSIC
                        </p>
                        <p className="banner-text">
                            New tools & features to help you get discovered 
                            and power your career!
                        </p>
                        <p className="header-body-text">
                            We are the Tinder of music, podcast and artist discovery.
                            Just like people love to find their perfect match in the game of love,
                            they also love to find new artists and podcasters that they've never
                            heard of before that they can add to their favorites collection! Our platform allows fans to 
                            hear snippets of your songs and podcasts and they can swipe 
                            left or right to; just like on a dating app! You can get data driven 
                            feedback as to how well people are enjoying your music or podcast snippets and direct 
                            feedback from your new fans. AudioSwipe will give you the spotlight 
                            and data you need to show your talents to the world and gain the following you need!
                        </p>
                    </Grid>
                    <Grid className="landing-page-fan-section" columns={12} columnSpacing={0} container>
                        <Grid md={6} sm={12}>
                            <img alt="Happy AudioSwipe Fan" aria-label="Happy AudiSwipe Fan" className="img" src={HappyFan} />
                        </Grid>
                        <Grid className="top-header-text" md={6} rowSpacing={0} sm={12} sx={{ boxShadow: 4, paddingLeft: 5, paddingRight: 5 }}>
                            <p className="header-text">
                                DISCOVER NEW UP & COMING ARTISTS 
                            </p>
                            <p className="banner-text" style={{ fontSize: 32, fontWeight: 700 }}>
                                Like Tinder... But for you to find your 
                                perfect artist matches to add your collection
                                of favorite artists! 
                            </p>
                            <p className="header-body-text" style={{ fontWeight: 700 }}>
                                We are the Tinder of music and artist discovery.
                                Find new artists that you like by swiping right, or 
                                swipe left in order to no longer receive song snippets 
                                of the artist. The snippets of each song you see will be 30 seconds long. You can find out more about the artists you like 
                                and subscribe to their social media and music accounts 
                                on apps like Spotify and YouTube. You can listen to all of their snippets for free. We want to help you 
                                find the newest and most enjoyable music and podcasts. 
                            </p>
                        </Grid>
                    </Grid>
                    <Grid className="explore-section" xs={12} sx={{ paddingTop: 5, textAlign: 'center' }}>
                        <Typography className="explore-header-text" component="h3" variant="caption">
                            Explore 
                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={{ backgroundColor: colors.primary, paddingTop: 5 }}>
                        <ImageList sx={{ margin: '0 auto', width: '75vw' }} cols={3}>
                            {imageListLandingItems.map((item, index) => (
                                <ImageListItem 
                                    key={index}
                                >
                                    <img 
                                        alt={item.title}
                                        aria-label={`${item.title} cover`}
                                        src={item.artistCover}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid className="free-offer-container" columns={12} columnSpacing={0} container>
                        <Grid className="free-offer-text-container" md={6} sm={12}>
                            <p className="free-offer-headline-text">
                                Limited Time: $0 Per month while in beta!
                            </p>
                            <p className="free-offer-body-text">
                                Don't miss a chance to discover and become discovered for free. 
                                We offer an ad-free and smooth experience that will immdiately 
                                show you the value in AudioSwipe during our beta launch.
                            </p>
                            <div className="prompt-button-container">
                                <StyledButton aria-label="Artist Sign Up Button" color="primary" size="small" variant="contained" disableRipple>
                                  Artist Sign Up
                                </StyledButton>
                                <SecondStyledButton aria-label="Artist Sign Up Button" color="primary" size="small" variant="contained" disableRipple>
                                    Fan Sign Up
                                </SecondStyledButton>
                         </div>
                        </Grid>
                        <Grid className="bottom-img-container" md={6} sm={12}>
                                <img alt="Music Celebration" aria-label="Music Celebration Photo" className="img" src={MusicCelebration} />
                        </Grid>
                    </Grid>
                </Grid>
            </LandingPageContainer>
        </ThemeProvider>
    );
}