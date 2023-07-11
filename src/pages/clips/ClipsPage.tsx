import React from 'react';
import Grid from '@mui/material/Grid';
import { ClipsPageContainer } from './styles';

export default function ClipsPage() {
    return <ClipsPage_DisplayLayer {...useDataLayer} />;
}

type ClipsPageDisplayLayerProps = {};

function ClipsPage_DisplayLayer() {
    return (
        <ClipsPageContainer container>
            <Grid className="top-clips-page-header" container>
                <p className="top-clips-page-header-text">
                    Audio Clips 
                </p>
            </Grid>
        </ClipsPageContainer>
    );
}
function useDataLayer() {
    return {};
}