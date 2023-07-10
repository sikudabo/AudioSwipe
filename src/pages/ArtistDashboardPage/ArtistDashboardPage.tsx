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
import { LikesAndDislikesChart } from './charts';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

type ArtistDashboardPageDisplayLayerProps = {
    artist?: any;
}

export default function ArtistDashboardPage() {
    return <ArtistDashboardPage_DisplayLayer {...useDataLayer()} />;
}

function ArtistDashboardPage_DisplayLayer({ artist }: ArtistDashboardPageDisplayLayerProps) {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <ArtistDashboardPageContainer columns={12} columnSpacing={0} container>
                <div className="top-artist-banner">
                    <p className="top-artist-banner-text">
                        Welcome Back 
                    </p>
                </div>
                <Grid className="summary-cards-row" spacing={3} container>
                    <Grid xs={12} sm={6} lg={3} item>
                        <SummaryCard bgColor={colors.secondary} color="primary" icon={'ant-design:like-filled'} title="Likes this month" total={71000} />
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} item>
                        <SummaryCard bgColor={colors.primary} color="primary" icon={'ant-design:dislike-filled'} title="Dislikes this month" total={5400} />
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} item>
                        <SummaryCard bgColor={colors.hotPink} color="primary" icon={'ant-design:plus-square-filled'} title="Subscribers added" total={44} />
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} item>
                        <SummaryCard bgColor={colors.black} color="primary" icon={'ant-design:minus-square-filled'} title="Subscribers lost" total={92} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <LikesAndDislikesChart
                            title="Likes vs Dislikes by month"
                            subheader="Compare"
                            chartLabels={[
                                '01/01/2003',
                                '02/01/2003',
                                '03/01/2003',
                                '04/01/2003',
                                '05/01/2003',
                                '06/01/2003',
                                '07/01/2003',
                                '08/01/2003',
                                '09/01/2003',
                                '10/01/2003',
                                '11/01/2003',
                            ]}
                            chartData={[
                                {
                                name: 'Likes',
                                type: 'line',
                                fill: 'solid',
                                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                                },
                                {
                                name: 'Dislikes',
                                type: 'line',
                                fill: 'solid',
                                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                                },
                            ]}
                        />
                    </Grid>
                </Grid>
            </ArtistDashboardPageContainer>
        </ThemeProvider>
    );
}

function useDataLayer() {
    const navigate = useNavigate();
    const { artist } = useUserData();
    const { isLoggedIn } = typeof artist !== 'undefined' ? artist as any : { isLoggedIn: false };


    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [artist]);

    return {
        artist,
    };
}