import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { SongTableRowType } from '../../../typings/songTableRowType';
import { useAudioPlayerRef, useUpdateAudioPlayer } from '../../../../../contexts/MusicPlayerContext';

type ClipsTablePlayStopButtonCellDisplayLayerProps = {
    handlePlay: (songId: string, songMediaId: string) => void;
    handleStop: () => void;
    isPlaying: boolean;
    songId: string;
    songMediaId: string;
}

export default function ClipsTablePlayStopButtonCell({ row }: SongTableRowType) {
    const { _id, songMediaId } = row;

    return <ClipsTablePlayStopButtonCell_DisplayLayer songId={_id} songMediaId={songMediaId} {...useDataLayer(_id)} />
}


function ClipsTablePlayStopButtonCell_DisplayLayer({
    handlePlay,
    handleStop,
    isPlaying,
    songId,
    songMediaId,
}: ClipsTablePlayStopButtonCellDisplayLayerProps) {
    return (
        <IconButton 
            aria-label={isPlaying ? 'Play Button' : 'Stop Button'}
            color="primary"
            onClick={isPlaying ? handleStop : () => handlePlay(songId, songMediaId)}
            size="large"
        >
            {isPlaying ? <StopCircleIcon /> : <PlayCircleIcon />}
        </IconButton>
    );
}

function useDataLayer(songId: string) {
    const [isPlaying, setIsPlaying] = useState(false);
    const { currentPlayingSongId } = useAudioPlayerRef();
    const { changeAudioSource, playAudio, setAudioSource, setCurrentPlayingSongId, stopAudio } = useUpdateAudioPlayer();

    useEffect(() => {
        if (songId !== currentPlayingSongId) {
            setIsPlaying(false);
            return;
        }

        setIsPlaying(true);
    }, [currentPlayingSongId]);

    async function handlePlay(songId: string, songMediaId: string) {
        if (currentPlayingSongId) {
            stopAudio();
        }
        setCurrentPlayingSongId(songId);
        setIsPlaying(true);
        changeAudioSource(`${process.env.REACT_APP_BASE_URI}api/get-audio/${songMediaId}`);
        playAudio();
    }

    function handleStop() {
        setCurrentPlayingSongId('');
        stopAudio();
        setIsPlaying(false); // This might be redundant due to useEffect. Test this out later
        changeAudioSource('');
    }

    return {
        handlePlay,
        handleStop,
        isPlaying,
    };
}
