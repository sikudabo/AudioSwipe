import React, { useMemo, useState } from 'react';
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
import { checkValidEmail, checkValidUrl, postData, postBinaryData, resizeImage } from '../../utils/helpers';
import { genres } from '../../utils/constants';
import { states } from '../../utils/constants';

export default function ArtistSettingsPage() {
    return <ArtistSettingsPage_DisplayLayer {...useDataLayer()} />;
}

type ArtistSettingsPageDisplayLayerProps = {
    handleArtistTypeChange: (e: {
        target: {
            value: string;
        };
    }) => void;
    handleAvatarChange: (e: {
        target: {
            files: any;
        };
    }) => Promise<void>;
    handleGenreSelectionChange: (e: {
        target: {
            value: any;
        };
    }) => void;
    handleSelectedArtistStatechange: (e: {
        target: {
            value: string;
        };
    }) => void;
    newArtistName: string;
    newArtistType: string;
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
    setNewPhoneNumber: React.Dispatch<any>
    setNewState: React.Dispatch<any>;
};

function ArtistSettingsPage_DisplayLayer({
    handleArtistTypeChange,
    handleAvatarChange,
    handleGenreSelectionChange,
    handleSelectedArtistStatechange,
    newArtistName,
    newArtistType,
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
    setNewPhoneNumber,
    setNewState,
}: ArtistSettingsPageDisplayLayerProps) {
    const { handleSubmit, register, setValue, watch } = useForm<ArtistType>({
        defaultValues: {
            firstName: newFirstName,
            lastName: newLastName,
            username: newUsername,
            password: newPassword,
            artistName: newArtistName,
            city: newCity,
            state: newState,
            email: newEmail,
            bio: newBio,
            spotifyLink: newSpotifyLink,
            soundcloudLink: newSoundcloudLink,
            youtubeLink: newYoutubeLink,
        },
        mode: 'onChange',
    });

    const currentUsername = watch('username');
    const currentBio = watch('bio');
    const [bioLength, setBioLength] = useState(currentBio?.length);

    useMemo(() => {
        setValue('username', currentUsername?.trim());
    }, [currentUsername, setValue])

    useMemo(() => {
        setBioLength(currentBio?.length)
    }, [currentBio]);

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
                                fullWidth
                                required
                                {...register('firstName', { required: true })}
                            />
                        </Grid>
                            <Grid className="last-name-grid" xs={12}>
                                <TextField
                                    aria-label="Last Name"
                                    color="info"
                                    helperText="Required"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('lastName', { 
                                        required: 'This field was required',
                                    })}
                                />
                            </Grid>
                            <Grid className="last-name-grid" xs={12}>
                                <TextField
                                    aria-label="Stage Name"
                                    color="info"
                                    helperText="Required"
                                    label="Stage Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('artistName', { 
                                        required: 'This field was required',
                                    })}
                                />
                            </Grid>
                            <Grid className="last-name-grid" xs={12}>
                                <TextField
                                    aria-label="Username"
                                    color="info"
                                    helperText="Required"
                                    label="username"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('username', { 
                                        required: 'This field was required',
                                    })}
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
                                    value={newPassword}
                                    fullWidth
                                    required
                                    {...register('password', { 
                                        required: 'This field was required',
                                        validate: v => v.trim().length >= 6,
                                    })}
                                />
                            </Grid>
                            <Grid className="bio-grid" xs={12}>
                                <TextField
                                    aria-label="Bio"
                                    color="info"
                                    helperText={`Optional (${bioLength}/250)`}
                                    inputProps={{ maxLength: 250 }}
                                    label="Bio"
                                    maxRows={4}
                                    minRows={4}
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    {...register('bio')}
                                />
                            </Grid>
                            <Grid className="avatar-grid" xs={12}>
                                <IconButton color="info" aria-label="upload picture" component="label">
                                    <input aria-label="Artist Profile Picture" accept="image/jpeg, image/jpg, image/png" name="avatar" onChange={handleAvatarChange} type="file" hidden required />
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
                                    fullWidth
                                    required
                                    {...register('email', { 
                                        required: 'This field was required',
                                    })}
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
                                    onChange={(e: string) => setNewPhoneNumber(e)}
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
                                    fullWidth
                                    required
                                    {...register('city', { 
                                        required: 'This field was required',
                                    })}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <Select
                                    color="info"
                                    defaultValue={states[0]}
                                    onChange={handleSelectedArtistStatechange}
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
                                        onChange={handleGenreSelectionChange}
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
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('spotifyLink')}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist YouTube Link"
                                    color="info"
                                    helperText="YouTube URL (Optional)"
                                    label="YouTube URL"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('youtubeLink')}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist SoundCloud Link"
                                    color="info"
                                    helperText="SoundCloud URL (Optional)"
                                    label="SoundCloud URL"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('soundcloudLink')}
                                />
                            </Grid>
                            <Grid className="artist-type-grid" xs={12}>
                                <FormControl>
                                    <FormLabel color="info" id="artist-type-label">
                                        Artist Type 
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        onChange={handleArtistTypeChange}
                                        value={newArtistType}
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
    const [newAvatar, setNewAvatar] = useState(null);
    const [newArtistType, setNewArtistType] = useState(artistType);
    const [newBio, setNewBio] = useState(bio);
    const [newArtistName, setNewArtistName] = useState(artistName);
    const [newSpotifyLink, setNewSpotifyLink] = useState(spotifyLink);
    const [newSoundcloudLink, setNewSoundcloudLink] = useState(soundcloudLink);
    const [newYoutubeLink, setNewYoutubeLink] = useState(youtubeLink);
    const [newGenres, setNewGenres] = useState(genres);

    function handleArtistTypeChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setNewArtistType(value);
    }

    async function handleAvatarChange(e: { target: { files: any }}) {
        const file = e.target.files[0];
        const resizedAvatar = await resizeImage(file);
        setNewAvatar(resizedAvatar as any);
    }

    function handleSelectedArtistStatechange(e: { target: { value: string }}) {
        const { value } = e.target;
        setNewState(value);
    }

    function handleGenreSelectionChange(e: {target: { value: any }}) {
        const { value: values } = e.target;
        setNewGenres(values);
    }
    
    return {
        handleArtistTypeChange,
        handleAvatarChange,
        handleGenreSelectionChange,
        handleSelectedArtistStatechange,
        newArtistName,
        newArtistType,
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
        setNewPhoneNumber,
        setNewState,
    };
}
