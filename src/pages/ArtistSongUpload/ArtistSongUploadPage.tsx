import React, { createElement, useRef, useState } from 'react';
import {
    Grid,
    IconButton,
    Paper,
    TextField
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MusicIcon from '@mui/icons-material/MusicNote';
import UploadIcon from '@mui/icons-material/UploadFile';
import { ArtistSongUploadPageContainer } from './styles';
import { AudioSwipeButton } from '../../components';
import { resizeImage } from '../../utils/helpers';
import { useHandleToastMessage } from '../../utils';
import { useIsFormLoading } from '../../utils/forms';

type ArtistSongUploadPageDisplayLayerProps = {
    albumName: string;
    audioRefTest: any;
    audioSrc: string;
    handleAlbumCoverChange: any;
    handleSongUploadChange: (e: {
        target: {
            files: any;
        };
    }) => Promise<void>;
    handleSubmit: () => void;
    isLoading: boolean;
    setAlbumName: React.Dispatch<React.SetStateAction<string>>;
    setSongName: React.Dispatch<React.SetStateAction<string>>;
    songName: string;
}

export default function ArtistSongUploadPage() {
    return <ArtistSongUploadPage_DisplayLayer {...useDataLayer()} />;
}

function ArtistSongUploadPage_DisplayLayer({
    albumName,
    audioRefTest,
    audioSrc,
    isLoading,
    handleAlbumCoverChange,
    handleSongUploadChange,
    handleSubmit,
    setAlbumName,
    setSongName,
    songName,
}: ArtistSongUploadPageDisplayLayerProps) {
    return (
        <ArtistSongUploadPageContainer>
            <Paper className="form-paper-wrapper" elevation={5}>
                <div className="form-header-text-container">
                    <p className="form-header-text">
                        Upload Song 
                    </p>
                </div>
                <div className="form-content-container">
                    <audio 
                        preload="metadata"
                        ref={audioRefTest}
                        src={audioSrc}
                        style={{
                            display: 'none',
                        }}
                        autoPlay
                        muted
                    />
                    <Grid className="album-name-grid" xs={12}>
                        <TextField
                            aria-label="Song Name"
                            color="secondary"
                            helperText="Required"
                            label="Song Name"
                            placeholder="Song Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid className="album-name-grid" xs={12}>
                        <TextField
                            aria-label="Album Name"
                            color="secondary"
                            helperText="Required"
                            label="Album Name"
                            placeholder="Album Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid className="album-cover-grid" xs={12}>
                        <IconButton color="secondary" aria-label="upload album cover" component="label">
                            <input aria-label="Artist Album Cover" accept="image/jpeg, image/jpg, image/png" name="albumCover" onChange={handleAlbumCoverChange} type="file" hidden required />
                            <PhotoCameraIcon />
                        </IconButton>
                        Album Cover (required *)
                    </Grid>
                    <Grid className="album-cover-grid" xs={12}>
                        <IconButton color="secondary" aria-label="Artist Song Upload" component="label">
                            <input aria-label="Artist Song Upload" accept="audio/mpeg3" name="song" onChange={handleSongUploadChange} type="file" hidden required />
                            <MusicIcon />
                        </IconButton>
                        Song (Must be 30 secs *)
                    </Grid>
                    <Grid className="btn-container" style={{ paddingLeft: 20, paddingRight: 20 }} xs={12}>
                        <AudioSwipeButton 
                            color="secondary"
                            disabled={isLoading}
                            onClick={handleSubmit}
                            startIcon={<UploadIcon />}
                            text="Upload"
                            variant="contained"
                            style={{
                                width: '100%',
                            }}
                            fullWidth
                        />
                    </Grid>
                </div>
            </Paper>
        </ArtistSongUploadPageContainer>
    );
}

function useDataLayer() {
    const { showToastMessage } = useHandleToastMessage();
    const {isLoading, setIsLoading } = useIsFormLoading();
    const [albumCover, setAlbumCover] = useState(null); // album cover file
    const [albumName, setAlbumName] = useState(''); // album name
    const [song, setSong] = useState(null); // mp3 file for upload
    const [songName, setSongName] = useState('');
    const [audioSrc, setAudioSrc] = useState('');
    const audioRefTest = useRef<HTMLAudioElement | null>(null);

    async function handleAlbumCoverChange(e: { target: { files: any }}) {
        const file = e.target.files[0];
        const resizedAlbumCover = await resizeImage(file);
        setAlbumCover(resizedAlbumCover as any);
    }

    async function handleSongUploadChange(e: { target: { files: any }}) {
        const file = await e.target.files[0];
        const src = URL.createObjectURL(file);
        setAudioSrc(src);
        setSong(file);
    }

    async function handleSubmit() {
        setIsLoading(true);
        if (!song) {
            showToastMessage({
                isError: true,
                message: 'You must enter a 30 sec audio clip.',
            });
            setIsLoading(false);
            return;
        }

        if (audioRefTest!.current!.duration < 29 || audioRefTest!.current!.duration > 31) {
            showToastMessage({
                isError: true,
                message: 'Your audio clip must be 30-seconds long.',
            });
            setIsLoading(false);
            return;
        }
    }

    return {
        albumName,
        audioRefTest,
        audioSrc,
        handleAlbumCoverChange,
        handleSongUploadChange,
        handleSubmit,
        isLoading,
        setAlbumName,
        setSongName,
        songName,
    };
}