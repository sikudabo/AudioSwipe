import React, { useEffect } from 'react';
import {
    Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArtistDashboardPageContainer } from './styles';
import { useUserData } from '../../hooks';
import { ArtistType } from '../../typings';
import { colors } from '../../components';
import { createTheme, ThemeProvider } from '@mui/material';
import NavSection from '../../components/DashboardNavSection';
import navConfig from '../../components/configs/dashboardNavConfig';
import SummaryCard from '../../components/cards/summaryCards/SummaryCard';
import { DashboardSongRankingList, GenderBreakdownChart, LikesAndDislikesChart } from './charts';
import useFetchArtistSongs from '../ClipsPage/ClipsTable/hooks/useFetchArtistSongs';
import formatLikesVsDislikesChart from './utils/formatLikesVsDislikesChart';
import formatGenderBreakdownChart from './utils/formatGenderBreakdownChart';
import { SongDataType } from '../ClipsPage/typings/songTableRowType';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

type ArtistDashboardPageDisplayLayerProps = {
    artist?: any;
    artistSongs: SongDataType[];
    dislikes: number;
    dislikesData: any;
    femaleCount: number;
    likes: number;
    likesData: any;
    maleCount: number;
    subscribersCount: number;
    totalArtistLikes: number;
};

export default function ArtistDashboardPage() {
    return <ArtistDashboardPage_DisplayLayer {...useDataLayer()} />;
}

function ArtistDashboardPage_DisplayLayer({ artist, artistSongs, dislikes, dislikesData, femaleCount, likes, likesData, maleCount, subscribersCount, totalArtistLikes }: ArtistDashboardPageDisplayLayerProps) {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <ArtistDashboardPageContainer columns={12} columnSpacing={0} container>
                <div className="top-artist-banner">
                    <p className="top-artist-banner-text">
                        Dashboard
                    </p>
                </div>
                <Grid className="summary-cards-row" spacing={3} container>
                    <Grid xs={12} sm={6} lg={3} item>
                        <SummaryCard bgColor={colors.secondary} color="primary" icon={'ant-design:like-filled'} title="Likes this month" total={likes} />
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} item>
                        <SummaryCard bgColor={colors.primary} color="primary" icon={'ant-design:dislike-filled'} title="Dislikes this month" total={dislikes} />
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} item>
                        <SummaryCard bgColor={colors.hotPink} color="primary" icon={'ant-design:plus-square-filled'} title="Total Likes" total={totalArtistLikes} />
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} item>
                        <SummaryCard bgColor={colors.black} color="primary" icon={'ant-design:minus-square-filled'} title="Subscribers" total={subscribersCount}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <LikesAndDislikesChart
                            title="Likes vs Dislikes by month"
                            subheader="Compare"
                            chartLabels={[
                                '01/01/2023',
                                '02/01/2023',
                                '03/01/2023',
                                '04/01/2023',
                                '05/01/2023',
                                '06/01/2023',
                                '07/01/2023',
                                '08/01/2023',
                                '09/01/2023',
                                '10/01/2023',
                                '11/01/2023',
                                '12/01/2023',
                            ]}
                            chartData={[
                                {
                                name: 'Likes',
                                type: 'line',
                                fill: 'solid',
                                data: likesData,
                                },
                                {
                                name: 'Dislikes',
                                type: 'line',
                                fill: 'solid',
                                data: dislikesData,
                                },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <GenderBreakdownChart
                            title="Gender Breakdown"
                            subheader="Likes by gender"
                            chartData={[
                                { label: 'female', value: femaleCount },
                                { label: 'Male', value: maleCount },
                            ]}
                            chartColors={[
                                colors.salmonPink,
                                colors.primary,
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={8} style={{ paddingBottom: 50 }}>
                        <DashboardSongRankingList
                            title="Song Rankings"
                            list={artistSongs}
                        />
                    </Grid>
                </Grid>
            </ArtistDashboardPageContainer>
        </ThemeProvider>
    );
}

function useDataLayer() {
    const navigate = useNavigate();
    const { artist, setArtist } = useUserData();

    const { isLoggedIn } = typeof artist !== 'undefined' ? artist as any : { isLoggedIn: false };
    const { data: artistSongs } = useFetchArtistSongs();
    const currentMonth = new Date().getMonth();
    const { subscribers = [] } = artist;
    const subscribersCount = subscribers.length;
    let likes = 0;
    let dislikes = 0;
    let totalArtistLikes = 0;

    const { dislikesData, likesData } = formatLikesVsDislikesChart(artistSongs);
    const { femaleCount, maleCount } = formatGenderBreakdownChart(artistSongs);

    if (artistSongs) {
        artistSongs.map((song: any) => {
            const totalLikes = song.likes.filter((like: any) => like.month === currentMonth);
            likes += totalLikes.length;
            totalArtistLikes += song.likes.length;
            const totalDislikes = song.disLikes.filter((dislike: any) => dislike.month === currentMonth);
            dislikes += totalDislikes.length;
        });
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [artist]);

    return {
        artist,
        artistSongs,
        dislikes,
        dislikesData,
        femaleCount,
        likes,
        likesData,
        maleCount,
        subscribersCount,
        totalArtistLikes,
    };
}