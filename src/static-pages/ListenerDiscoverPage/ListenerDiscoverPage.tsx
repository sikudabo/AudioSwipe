import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';
import { colors } from '../../components';
import { deviceBreakPointsMaxWidth } from '../../utils/helpers';
import PlaylistPhoto from '../../audio-media/audioswipe-playlist.jpeg';
import ProfilePagePhoto from '../../audio-media/audioswipe-profile.jpeg';
import SwipePhoto from '../../audio-media/swipe-photo.jpeg';
import Select from '@mui/material/Select';

const ListenerDiscoverPageContainer = styled(Grid)`
    background-color: ${colors.white};
    height: 100%;
    padding-top: 50px;

    p {
        color: ${colors.white};
    }

    .mobile-app-section {
        background-color: ${colors.hotPink};

        .mobile-app-text-section {
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            .mobile-app-header-text {
                padding-top: 50px;
                font-size: 32px;
                font-weight: 700;
            }

            .mobile-app-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .mobile-app-image-section {
            padding-top: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }
    }

    .profile-section {

        .profile-text-section {
            background-color: ${colors.primary};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            .profile-header-text {
                padding-top: 50px;
                font-size: 32px;
                font-weight: 700;
            }

            .profile-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .profile-image-section {
            padding-top: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }
    }

    .playlist-section {

        .playlist-text-section {
            background-color: ${colors.secondary};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            .playlist-header-text {
                padding-top: 50px;
                font-size: 32px;
                font-weight: 700;
            }

            .playlist-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .playlist-image-section {
            padding-top: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }
    }
`;

export default function ListenerDiscoverPage() {
    return (
        <ListenerDiscoverPageContainer container>
            <Grid className="mobile-app-section" columnSpacing={0} container>
                <Grid className="mobile-app-text-section" md={6} sm={12} container>
                    <p className="mobile-app-header-text">
                        Tinder for Music
                    </p>
                    <p className="mobile-app-body-text">
                        Like modern dating apps that allow you to find your perfect match efficiently; AudioSwipe 
                        allows you to find Christian musicians, podcasters and authors that you have never heard of!
                        We also offer non-religious content from 74 different genres! This means that there is something 
                        for everyone on AudioSwipe. AudioSwipe allows you to find swipe based on 30-second snippets of an artists 
                        audio content. If you like it, you can follow them on apps like Spotify, YouTube, and SoundCloud so that 
                        you can hear more of their content! AudioSwipe allows you to discover the music that is hard to find on 
                        platforms with so much content like Spotify that you'd never find on a site that large. These 30-second audio clips 
                        allow you to decide if you want to hear more of their content or if you've had enough. 
                        Like a modern dating app; swipe right if you love the content or swipe left if you would pass on the 
                        content. AudioSwipe is simple to use, allows you to find new artists that you will love and it enables 
                        artists to get realtime feedback as to how well their content is being received by fans!
                    </p>
                </Grid>
                <Grid className="mobile-app-image-section" md={6} sm={12}>
                    <img alt="Audioswipe App Swiping" aria-label="AudioSwipe App Swiping" src={SwipePhoto} />
                </Grid>
            </Grid>
            <Grid className="profile-section" columnSpacing={0} container>
                <Grid className="profile-image-section" md={6} sm={12}>
                    <img alt="AudioSwipe artist profile" aria-label="AudioSwipe artist profile" src={ProfilePagePhoto} />
                </Grid>
                <Grid className="profile-text-section" md={6} sm={12} container>
                    <p className="profile-header-text">
                        Find new artists 
                    </p>
                    <p className="profile-body-text">
                        You can find links to an artists' Spotify, YouTube, or SoundCloud page so that 
                        you can get their fully featured content when you find them on AudioSwipe! Once you 
                        like one of their 30-second audio snippets, you can navigate to their profile page and actually follow 
                        them on 
                    </p>
                </Grid>
            </Grid>
            <Grid className="playlist-section" columnSpacing={0} container>
                <Grid className="playlist-text-section" md={6} sm={12} container>
                    <p className="playlist-header-text">
                        Aritist Playlists 
                    </p>
                    <p className="playlist-body-text">
                        Once you subscribe to an artist you can get all of their 30-second snippets for 
                        their audio clips; not just the one that you swiped right on! This allows you to see 
                        if you like their other clips and want to add them to your Spotify, YouTube or SoundCloud 
                        playlist. Subscriptions allow you to get more content from the musicians, podcasters and
                        authors that you will fall in love with on AudioSwipe!
                    </p>
                </Grid>
                <Grid className="playlist-image-section" md={6} sm={12}>
                    <img alt="Audioswipe App Swiping" aria-label="AudioSwipe App Swiping" src={PlaylistPhoto} />
                </Grid>
            </Grid>
        </ListenerDiscoverPageContainer>
    );
}