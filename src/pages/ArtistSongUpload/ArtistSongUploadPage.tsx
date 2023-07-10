import React, { useState } from 'react';
import {
    Grid,
    IconButton,
    Paper,
    TextField
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { ArtistSongUploadPageContainer } from './styles';
import { resizeImage } from '../../utils/helpers';

type ArtistSongUploadPageDisplayLayerProps = {
    albumName: string;
    handleAlbumCoverChange: any;
    setAlbumName: React.Dispatch<React.SetStateAction<string>>;
    setSongName: React.Dispatch<React.SetStateAction<string>>;
    songName: string;
}

export default function ArtistSongUploadPage() {
    return <ArtistSongUploadPage_DisplayLayer {...useDataLayer()} />;
}

function ArtistSongUploadPage_DisplayLayer({
    albumName,
    handleAlbumCoverChange,
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
                    <Grid className="song-name-grid" xs={12}>
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
                </div>
            </Paper>
        </ArtistSongUploadPageContainer>
    );
}

function useDataLayer() {
    const [albumCover, setAlbumCover] = useState(null); // album cover file
    const [albumName, setAlbumName] = useState(''); // album name
    const [song, setSong] = useState(null); // mp3 file for upload
    const [songName, setSongName] = useState('');

    async function handleAlbumCoverChange(e: { target: { files: any }}) {
        const file = e.target.files[0];
        const resizedAlbumCover = await resizeImage(file);
        setAlbumCover(resizedAlbumCover as any);
    }

    async function handleSongUploadChange(e: { target: { files: any }}) {

    }

    return {
        albumName,
        handleAlbumCoverChange,
        setAlbumName,
        setSongName,
        songName,
    };
}