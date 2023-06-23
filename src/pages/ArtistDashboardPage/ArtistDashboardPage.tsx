import React, { useEffect } from 'react';
import {
    Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../hooks';
import { ArtistType } from '../../typings';

type ArtistDashboardPageDisplayLayerProps = {
    artist?: any;
}

export default function ArtistDashboardPage() {
    return <ArtistDashboardPage_DisplayLayer {...useDataLayer()} />;
}

function ArtistDashboardPage_DisplayLayer({ artist }: ArtistDashboardPageDisplayLayerProps) {
    return (
        <Grid style={{ paddingTop: 300, alignItems: 'center', justifyContent: 'center' }} columns={12} columnSpacing={0} container>
            <p style={{ fontSize: 32, fontWeight: 900 }}>
                Welcome {artist.artistName}
            </p>
        </Grid>
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