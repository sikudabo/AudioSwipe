import React, { useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PhoneInput from 'react-phone-input-material-ui';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    Checkbox,
    FormControl,
    FormLabel,
    FormControlLabel,
    Hidden,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Step,
    Stepper,
    StepLabel,
    TextField,
    Unstable_Grid2 as Grid,
    IconButton,
    FormHelperText,
    Box,
    Chip,
    ListItemText
} from '@mui/material';
import { ArtistSettingsPageContainer } from './styles/ArtistSettingsPageContainer';
import { AudioSwipeButton } from '../../components';
import { ArtistType } from '../../typings';
import { useIsFormLoading } from '../../utils/forms';
import { useUserData } from '../../hooks';
import { checkValidEmail, checkValidUrl, postData, postBinaryData } from '../../utils/helpers';
import { genres } from '../../utils/constants';
import { states } from '../../utils/constants';

export default function ArtistSettingsPage() {
    return <ArtistSettingsPage_DisplayLayer {...useDataLayer()} />;
}

type ArtistSettingsPageDisplayLayerProps = {
    newArtistName: string;
    newArtistType: string;
    newAvatar: string;
    newBio: string;
    newCity: string;
    newEmail: string;
    newFirstName: string;
    newGenres: Array<string>;
    newLastName: string;
    newPassword: string;
    newPhoneNumber: string;
    newSoundcloudLink?: string;
    newSpotifyLink?: string;
    newState: string;
    newUsername: string;
    newYoutubeLink?: string;
};

function ArtistSettingsPage_DisplayLayer({
    newArtistName,
    newArtistType,
    newAvatar,
    newBio,
    newCity,
    newEmail,
    newFirstName,
    newGenres,
    newLastName,
    newPassword,
    newPhoneNumber,
    newSoundcloudLink,
    newSpotifyLink,
    newState,
    newUsername,
    newYoutubeLink,
}: ArtistSettingsPageDisplayLayerProps) {
    return (
        <ArtistSettingsPageContainer>
            <div className="top-text-container">
                <div className="top-text">
                    Settings
                </div>
            </div>
            <div className="form-container">
                <Paper
                    className="form"
                    elevation={3}
                >
                    <div className="form-header-text-container">
                        <div className="form-header-text">
                            Update 
                        </div>
                    </div>
                    <form>
                        <Grid className="first-name-grid" xs={12}>
                            <TextField
                                aria-label="First Name"
                                color="info"
                                helperText="Required"
                                label="First Name"
                                variant="outlined"
                                value={newFirstName}
                                fullWidth
                                required
                            />
                        </Grid>
                            <Grid className="last-name-grid" xs={12}>
                                <TextField
                                    aria-label="Last Name"
                                    color="info"
                                    helperText="Required"
                                    label="Last Name"
                                    variant="outlined"
                                    value={newLastName}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="last-name-grid" xs={12}>
                                <TextField
                                    aria-label="Stage Name"
                                    color="info"
                                    helperText="Required"
                                    label="Stage Name"
                                    variant="outlined"
                                    value={newArtistName}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="last-name-grid" xs={12}>
                                <TextField
                                    aria-label="Username"
                                    color="info"
                                    helperText="Required"
                                    label="username"
                                    variant="outlined"
                                    value={newUsername}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="last-name-grid" xs={12}>
                                <TextField
                                    aria-label="Password"
                                    color="info"
                                    helperText="Must be at least 6 characters long"
                                    inputProps={{ minLength: 6 }}
                                    label="password"
                                    type="password"
                                    variant="outlined"
                                    value={newPassword}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="bio-grid" xs={12}>
                                <TextField
                                    aria-label="Bio"
                                    color="info"
                                    helperText="Optional"
                                    inputProps={{ maxLength: 250 }}
                                    label="Bio"
                                    maxRows={4}
                                    minRows={4}
                                    variant="outlined"
                                    value={newBio}
                                    fullWidth
                                    multiline
                                />
                            </Grid>
                            <Grid className="avatar-grid" xs={12}>
                                <IconButton color="info" aria-label="upload picture" component="label">
                                    <input aria-label="Artist Profile Picture" accept="image/jpeg, image/jpg, image/png" name="avatar" type="file" hidden required />
                                    <PhotoCameraIcon />
                                </IconButton>
                                Avatar
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist Email"
                                    color="info"
                                    helperText="Required"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    value={newEmail}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <PhoneInput
                                    aria-label="Artist Phone number"
                                    component={TextField}
                                    inputProps={{
                                        color: "info",
                                        label: "Phone number (Required)",
                                        required: true,
                                    }}
                                    value={newPhoneNumber}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist City"
                                    color="info"
                                    helperText="Required"
                                    label="City"
                                    variant="outlined"
                                    value={newCity}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <Select
                                    color="info"
                                    defaultValue={states[0]}
                                    value={newState}   
                                    fullWidth       
                                >
                                    {states.map((state, index) => (
                                        <MenuItem key={index} value={state}>
                                            {state}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>
                                    State {`(Required)`}
                                </FormHelperText>
                            </Grid>
                            <Grid className="genre-options-grid" xs={12}>
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel 
                                        color="info"
                                        id="select-label"
                                    />
                                    <Select 
                                        aria-label="Artist Genres"
                                        color="info"
                                        id="artist-genres"
                                        input={<OutlinedInput />}
                                        placeholder="Genre"
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                                {selected.map((value: string, index: number) => (
                                                    <Chip color="info" key={index} label={value} variant="outlined" />
                                                ))}
                                            </Box>
                                        )}
                                        value={newGenres}
                                        fullWidth
                                        multiple
                                        required
                                    >
                                        {genres.map((genre, index) => (
                                            <MenuItem 
                                                disabled={newGenres.length > 2 && !newGenres.includes(genre)}
                                                key={index}
                                                value={genre}
                                            >
                                                <Checkbox checked={newGenres.indexOf(genre) > -1} color="info" />
                                                <ListItemText primary={genre} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Required (Up to 3)</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist Spotify Link"
                                    color="info"
                                    helperText="Spotify URL (Optional)"
                                    label="Spotify URL"
                                    value={newSpotifyLink}
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist YouTube Link"
                                    color="info"
                                    helperText="YouTube URL (Optional)"
                                    label="YouTube URL"
                                    value={newYoutubeLink}
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist SoundCloud Link"
                                    color="info"
                                    helperText="SoundCloud URL (Optional)"
                                    label="SoundCloud URL"
                                    value={newSoundcloudLink}
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid className="artist-type-grid" xs={12}>
                                <FormControl>
                                    <FormLabel color="info" id="artist-type-label">
                                        Artist Type 
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                    >
                                        <FormControlLabel color="info" value="author" control={<Radio color="info" />} label="Author" />
                                        <FormControlLabel color="info" value="musician" control={<Radio color="info" />} label="Musician" />
                                        <FormControlLabel color="info" value="podcaster" control={<Radio color="info" />} label="Podcaster" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                    </form>
                </Paper>
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
        newArtistName,
        newArtistType,
        newAvatar,
        newBio,
        newCity,
        newEmail,
        newFirstName,
        newGenres,
        newLastName,
        newPassword,
        newPhoneNumber,
        newSoundcloudLink,
        newSpotifyLink,
        newState,
        newUsername,
        newYoutubeLink,
    };
}
