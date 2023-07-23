import React, { useEffect, useState } from 'react';
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
    audioSource: string;
    currentPlayingSongId: string;
    handlePlay: () => void;
    onEndClearId: () => void;
};

function ClipsPage_DisplayLayer({
    artistAudioPlayerRef,
    audioSource,
    currentPlayingSongId,
    handlePlay,
    onEndClearId,
}: ClipsPageDisplayLayerProps ) {

    return (
        <ClipsPageContainer container>
            <audio 
                loop={false}
                onEnded={onEndClearId}
                ref={artistAudioPlayerRef}
                src={CatchWreckMp3}
                hidden 
            />
            <Grid className="top-clips-page-header" container>
                <p 
                    className="top-clips-page-header-text"
                >
                    Audio Clips
                </p>
                <ClipsTableTest />
            </Grid>
        </ClipsPageContainer>
    );
}
function useDataLayer() {
    const { artistAudioPlayerRef, audioSource, currentPlayingSongId } = useAudioPlayerRef();
    const { playAudio, setCurrentPlayingSongId } = useUpdateAudioPlayer();

    const handlePlay = () => {
        playAudio();
    }

    const onEndClearId = () => {
        setCurrentPlayingSongId('');
    }

    return {
        artistAudioPlayerRef,
        audioSource,
        currentPlayingSongId,
        handlePlay,
        onEndClearId,
    };
}