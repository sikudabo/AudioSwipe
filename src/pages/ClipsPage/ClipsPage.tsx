import React from 'react';
import Grid from '@mui/material/Grid';
import { ClipsPageContainer } from './styles';
import { useAudioPlayerRef, useUpdateAudioPlayer } from '../../contexts/MusicPlayerContext';
import ClipsTableTest from './ClipsTable/ClipsTableTest';
const CatchWreckMp3 = require('../../audio-media/catch-wreck.mp3');

export default function ClipsPage() {
    return <ClipsPage_DisplayLayer {...useDataLayer()} />;
}

type ClipsPageDisplayLayerProps = {
    artistAudioPlayerRef: any;
    handlePlay: () => void;
};

function ClipsPage_DisplayLayer({
    artistAudioPlayerRef,
    handlePlay,
}: ClipsPageDisplayLayerProps ) {
    return (
        <ClipsPageContainer container>
            <audio 
                loop={false}
                ref={artistAudioPlayerRef}
                src={`${process.env.REACT_APP_BASE_URI}api/get-audio/1689812059779-song.mp3`}
                hidden 
            />
            <Grid className="top-clips-page-header" container>
                <p 
                    className="top-clips-page-header-text"
                    onClick={handlePlay}
                >
                    Audio Clips 
                </p>
                <ClipsTableTest />;
            </Grid>
        </ClipsPageContainer>
    );
}
function useDataLayer() {
    const { artistAudioPlayerRef } = useAudioPlayerRef();
    const { playAudio } = useUpdateAudioPlayer();

    const handlePlay = () => {
        playAudio();
    }

    return {
        artistAudioPlayerRef,
        handlePlay,
    };
}