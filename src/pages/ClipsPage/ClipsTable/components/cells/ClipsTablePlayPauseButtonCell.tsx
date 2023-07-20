import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { SongTableRowType } from '../../../typings/songTableRowType';
import { useAudioPlayerRef, useUpdateAudioPlayer } from '../../../../../contexts/MusicPlayerContext';


function useDataLayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const { currentPlayingSongId } = useAudioPlayerRef();
    const { changeAudioSource, playAudio, setCurrentPlayingSongId, stopAudio } = useUpdateAudioPlayer();
}
