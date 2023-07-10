import React, { useState } from 'react';

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
        <div>
            Artist Song Upload Page! 
        </div>
    );
}

function useDataLayer() {
    const [albumCover, setAlubumCover] = useState(null); // album cover file
    const [albumName, setAlbumName] = useState(''); // album name
    const [song, setSong] = useState(null); // mp3 file for upload
    const [songName, setSongName] = useState('');

    function handleAlbumCoverChange(e: { target: { files: any }}) {
        return;
    }

    return {
        albumName,
        handleAlbumCoverChange,
        setAlbumName,
        setSongName,
        songName,
    };
}