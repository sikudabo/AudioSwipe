import React, { useEffect } from 'react';
import {
    Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../hooks';
import { ArtistType } from '../../typings';
import { colors } from '../../components';
import { createTheme, ThemeProvider } from '@mui/material';
import NavSection from '../../components/DashboardNavSection';
import navConfig from '../../components/configs/dashboardNavConfig';

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
            <Grid style={{ backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }} columns={12} columnSpacing={0} container>
                <p onClick={() => navigate('/')} style={{ cursor: 'pointer', fontSize: 32, fontWeight: 900 }}>
                    Welcome {artist.artistName}
                </p>
            </Grid>
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