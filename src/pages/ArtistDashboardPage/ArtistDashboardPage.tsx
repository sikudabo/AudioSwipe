import React from 'react';
import {
    Grid
} from '@mui/material';

export default function ArtistDashboardPage() {
    return (
        <Grid style={{ paddingTop: 300, alignItems: 'center', justifyContent: 'center' }} columns={12} columnSpacing={0} container>
            <p style={{ fontSize: 32, fontWeight: 900 }}>
                Artist Page 
            </p>
        </Grid>
    );
}