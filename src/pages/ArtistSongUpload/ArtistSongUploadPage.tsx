import React, { createElement, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { postBinaryData } from '../../utils/helpers';
import { resizeImage } from '../../utils/helpers';
import { useHandleToastMessage } from '../../utils';
import { useIsFormLoading } from '../../utils/forms';
import { useUserData } from '../../hooks';

type ArtistSongUploadPageDisplayLayerProps = {
    albumName: string;
    audioRefTest: any;
    audioSrc: string;
    handleAlbumCoverChange: any;
    handleAlbumNameChange: (e: {
        target: {
            value: string;
        };
    }) => void;
    handleSongNameChange: (e: {
        target: {
            value: string;
        };
    }) => void;
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
    handleAlbumNameChange,
    handleSongNameChange,
    handleSongUploadChange,
    handleSubmit,
    songName,
}: ArtistSongUploadPageDisplayLayerProps) {
    return (
        <ArtistSongUploadPageContainer>
            <Paper className="form-paper-wrapper" elevation={5}>
                <div className="form-header-text-container">
                    <p className="form-header-text">
                        Upload Audio
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
                            aria-label="Clip Name"
                            color="secondary"
                            helperText="Required"
                            label="Clip Name"
                            onChange={handleSongNameChange}
                            placeholder="Clip Name"
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
                            onChange={handleAlbumNameChange}
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
    const { artist, setArtist } = useUserData();
    const { artistName, genres, _id, userType } = artist;
    const { showToastMessage } = useHandleToastMessage();
    const {isLoading, setIsLoading } = useIsFormLoading();
    const [albumCover, setAlbumCover] = useState(null); // album cover file
    const [albumName, setAlbumName] = useState(''); // album name
    const [song, setSong] = useState(null); // mp3 file for upload
    const [songName, setSongName] = useState('');
    const [audioSrc, setAudioSrc] = useState('');
    const audioRefTest = useRef<HTMLAudioElement | null>(null);
    const navigate = useNavigate();

    async function handleAlbumCoverChange(e: { target: { files: any }}) {
        const file = e.target.files[0];
        const resizedAlbumCover = await resizeImage(file);
        setAlbumCover(resizedAlbumCover as any);
    }

    function handleSongNameChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setSongName(value);
    }

    function handleAlbumNameChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setAlbumName(value);
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

        if (audioRefTest!.current!.duration < 25 || audioRefTest!.current!.duration > 31) {
            showToastMessage({
                isError: true,
                message: 'Your audio clip must be 30-seconds long.',
            });
            setIsLoading(false);
            return;
        }

        if (!albumCover) {
            showToastMessage({
                isError: true,
                message: 'You must add an album cover',
            });
            setIsLoading(false);
            return;
        } else if (!songName.trim()) {
            showToastMessage({
                isError: true,
                message: 'You must enter an audio name for this file.',
            });
            setIsLoading(false);
            return;
        } else if (!albumName) {
            showToastMessage({
                isError: true,
                message: 'You must enter an album/book name.',
            });
            setIsLoading(false);
            return;
        }


        const fd = new FormData();
        fd.append('albumCover', albumCover, 'album-cover.jpg');

       await postBinaryData({
            data: fd,
            url: 'api/saveAlbumCover',
        }).then(async (response) => {
            const { isSuccess } = response;

            if (!isSuccess) {
                showToastMessage({
                    isError: true,
                    message: response.message,
                });
                setIsLoading(false);
                return;
            }

            const { albumCover: responseCover } = response;

            const fd = new FormData();
            fd.append('album', albumName);
            fd.append('albumCover', responseCover);
            fd.append('artistId', _id);
            fd.append('artistName', artistName);
            fd.append('genres', genres);
            fd.append('songArtistType', userType);
            fd.append('name', songName);
            fd.append('song', song, 'song.mp3');

            await postBinaryData({
                data: fd,
                url: 'api/saveSong',
            }).then((response) => {
                const { isSuccess, message, updatedArtist } = response;
                if (!isSuccess) {
                    showToastMessage({
                        isError: true,
                        message: message,
                    });
                    setIsLoading(false);
                    return;
                }

                showToastMessage({
                    isError: false,
                    message: message,
                });
                setIsLoading(false);
                navigate('/artist/dashboard/main');
                return;

            }).catch((e: Error) => {
                showToastMessage({
                    isError: true,
                    message: 'There was an error. Please try again!',
                });
                setIsLoading(false);
            });
        }).catch((e: Error) => {
            showToastMessage({
                isError: true,
                message: 'There was an error. Please try again!',
            });
            setIsLoading(false);
        });
    }

    return {
        albumName,
        audioRefTest,
        audioSrc,
        handleAlbumCoverChange,
        handleAlbumNameChange,
        handleSongNameChange,
        handleSongUploadChange,
        handleSubmit,
        isLoading,
        setAlbumName,
        setSongName,
        songName,
    };
}