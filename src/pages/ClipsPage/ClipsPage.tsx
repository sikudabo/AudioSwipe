import React from 'react';
import Grid from '@mui/material/Grid';
import { ClipsPageContainer } from './styles';
import { useAudioPlayerRef } from '../../contexts/MusicPlayerContext';
import ClipsTableTest from './ClipsTable/ClipsTableTest';
const CatchWreckMp3 = require('../../audio-media/catch-wreck.mp3');

export default function ClipsPage() {
    return <ClipsPage_DisplayLayer {...useDataLayer()} />;
}

type ClipsPageDisplayLayerProps = {
    artistAudioPlayerRef: any;
};

function ClipsPage_DisplayLayer({
    artistAudioPlayerRef,
}: ClipsPageDisplayLayerProps ) {
    return (
        <ClipsPageContainer container>
            <audio 
                ref={artistAudioPlayerRef}
                src={CatchWreckMp3}
                hidden 
            />
            <Grid className="top-clips-page-header" container>
                <p className="top-clips-page-header-text">
                    Audio Clips 
                </p>
                <ClipsTableTest />;
            </Grid>
        </ClipsPageContainer>
    );
}
function useDataLayer() {
    const { artistAudioPlayerRef } = useAudioPlayerRef();

    return {
        artistAudioPlayerRef,
    };
}