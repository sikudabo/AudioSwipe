import React, { useState } from 'react';
import { ArtistSettingsPageContainer } from './styles/ArtistSettingsPageContainer';
import { useUserData } from '../../hooks';
import { postData, postBinaryData } from '../../utils/helpers';

export default function ArtistSettingsPage() {
    return <ArtistSettingsPage_DisplayLayer {...useDataLayer()} />;
}

function ArtistSettingsPage_DisplayLayer() {
    return (
        <ArtistSettingsPageContainer>
            <div className="top-text-container">
                <div className="top-text">
                    Settings
                </div>
            </div>
        </ArtistSettingsPageContainer>
    );
}

function useDataLayer() {
    const { artist, setArtist } = useUserData();
    const {
        firstName,
        lastName,
        username,
        password,
        email,
        phoneNumber,
        city, 
        state,
        avatar,
        artistType,
        bio,
        artistName,
        spotifyLink,
        soundcloudLink,
        youtubeLink,
        genres,
    } = artist;

    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newUsername, setNewUsername] = useState(username);
    const [newPassword, setNewPassword] = useState(password);
    const [newEmail, setNewEmail] = useState(email);
    const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
    const [newCity, setNewCity] = useState(city);
    const [newState, setNewState] = useState(state);
    const [newAvatar, setNewAvatar] = useState(avatar);
    const [newArtistType, setNewArtistType] = useState(artistType);
    const [newBio, setNewBio] = useState(bio);
    const [newArtistName, setNewArtistName] = useState(artistName);
    const [newSpotifyLink, setNewSpotifyLink] = useState(spotifyLink);
    const [newSoundcloudLink, setNewSoundcloudLink] = useState(soundcloudLink);
    const [newYoutubeLink, setNewYoutubeLink] = useState(youtubeLink);
    const [newGenres, setNewGenres] = useState(genres);
    
    return {

    }
}