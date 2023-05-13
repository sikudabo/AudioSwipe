import React, { useEffect, useMemo, useRef, useState } from 'react';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CheckIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PhoneInput from 'react-phone-input-material-ui';
import styled from '@emotion/styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Navigate } from 'react-router-dom';
import {
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    Hidden,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    Step,
    Stepper,
    StepLabel,
    TextField,
    Typography,
    Unstable_Grid2 as Grid,
    IconButton,
    FormHelperText,
    Box,
    Chip,
    ListItemText
} from '@mui/material';
import { SignupArtistContainer } from './components/SignupArtistContainer';
import { colors, AudioSwipeButton, SelectComponent } from '../../components';
import { genres, states } from '../../utils/constants';

function CustomPhoneInput(props: any) {
    return <TextField {...props} color="secondary" />;
}

export default function SignupArtistPage() {
    const headerTextRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<any>([]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const steps = [
        "Peronsal Information",
        "Contact Information",
        "Location Information",
        "Genres",
        "Social Links",
    ];

    function handlePhoneNumberChange(value: string) {
        setPhoneNumber(value);
    }

    useEffect(() => {
        if (typeof headerTextRef !== 'undefined' && typeof headerTextRef.current !== 'undefined') {
            // window.scrollTo(0, (headerTextRef as any).current.offsetTop);
            window.scrollTo({
                behavior: 'smooth',
                top: (headerTextRef as any).current.offsetTop,
            });
        }
    }, [currentStep]);

    useMemo(() => {
        setCompletedSteps(completedSteps);
    }, [completedSteps]);

    const handleNextStep = () => {
        if (currentStep === steps.length) {
            return;
        }

        setCompletedSteps((previousSteps: [any]) => [...previousSteps as any, currentStep]);
        console.log('The current steps next are:', completedSteps);

        setCurrentStep((previousStep: number) => previousStep + 1);
    }

    const handleBackStep = () => {
        if (currentStep === 0) {
            setCurrentStep(0);
            return;
        }

        setCurrentStep((previousStep: number) => previousStep - 1);
        setCompletedSteps(() => completedSteps.filter((step: number) => step !== currentStep));
        console.log('The completed steps back are:', completedSteps);
    }

    const handleReset = () => {
        setCompletedSteps([]);
        setCurrentStep(0);
    }

    function handleGenreSelectionChange(e: {target: { value: any }}) {
        const { value: values } = e.target;
        setSelectedGenres(values);
    }

    return (
        <SignupArtistContainer columns={12} columnSpacing={0} container>
            <div className="top-signup-header">
                <p className="header-text">
                    Sign Up
                </p>
            </div>
            <div ref={headerTextRef} />
            <Grid className="form-header-text-container" xs={12}>
                <p className="form-header-text">
                    {steps[currentStep] || 'Submit'}
                </p>
            </Grid>
            <div className="stepper-container">
                <Stepper activeStep={currentStep} color="secondary">
                    {steps.map((step, index) => {
                        const stepProps: { completed?: boolean } = {};

                        if(completedSteps.find((stepIndex: number) => step as any === stepIndex)) {
                            stepProps.completed = true;
                        } 

                        return (
                            <Step key={index} {...stepProps}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
            <Paper className="form-paper-wrapper" elevation={5}>
                {currentStep === 0 && (
                    <div>
                        <Grid className="first-name-grid" xs={12}>
                            <TextField
                                aria-label="First Name"
                                color="secondary"
                                helperText="Required"
                                label="First Name"
                                name="firstName"
                                placeholder="First Name"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="last-name-grid" xs={12}>
                            <TextField
                                aria-label="Last Name"
                                color="secondary"
                                helperText="Required"
                                label="Last Name"
                                name="lastName"
                                placeholder="Last Name"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="stage-name-grid" xs={12}>
                            <TextField
                                aria-label="Stage Name"
                                color="secondary"
                                helperText="Required"
                                label="Stage Name"
                                name="stageName"
                                placeholder="Stage Name"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="username-grid" xs={12}>
                            <TextField
                                aria-label="Username"
                                color="secondary"
                                helperText="Required"
                                label="username"
                                name="username"
                                placeholder="Username"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="password-grid" xs={12}>
                            <TextField
                                aria-label="Password"
                                color="secondary"
                                helperText="Must be at least 6 characters long"
                                inputProps={{ minLength: 6 }}
                                label="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="bio-grid" xs={12}>
                            <TextField
                                aria-label="Bio"
                                color="secondary"
                                helperText="Optional"
                                inputProps={{ maxLength: 250 }}
                                label="Bio"
                                maxRows={4}
                                minRows={4}
                                name="bio"
                                placeholder="Bio"
                                variant="outlined"
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Hidden mdDown>
                            <Grid className="birthday-grid" xs={12}>
                                <DatePicker 
                                    label="Birthday"
                                    slotProps={{
                                        textField: {
                                            color: 'secondary',
                                            fullWidth: true,
                                            helperText: 'Required',
                                            required: true,
                                        },
                                    }}
                                    disableOpenPicker 
                                />
                            </Grid>
                        </Hidden>
                        <Hidden lgUp>
                            <Grid className="birthday-grid" xs={12}>
                                <MobileDatePicker 
                                    label="Birthday"
                                    slotProps={{
                                        textField: {
                                            color: 'secondary',
                                            fullWidth: true,
                                            helperText: 'Required',
                                            required: true,
                                        },
                                    }}
                                    disableOpenPicker 
                                />
                            </Grid>
                        </Hidden>
                        <Grid className="avatar-grid" xs={12}>
                            <IconButton color="secondary" aria-label="upload picture" component="label">
                                <input aria-label="Artist Profile Picture" accept="image/jpeg, image/jpg, image/png" name="avatar" type="file" hidden />
                                <PhotoCameraIcon />
                            </IconButton>
                            Avatar
                        </Grid>
                    </div>
                )}
                {currentStep === 1 && (
                    <>
                        <Grid className="first-name-grid" xs={12}>
                            <TextField
                                aria-label="Artist Email"
                                color="secondary"
                                helperText="Required"
                                label="Email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="first-name-grid" xs={12}>
                            <PhoneInput
                                aria-label="Artist Phone number"
                                component={CustomPhoneInput}
                                inputProps={{
                                    name: "Phone number",
                                    label: "Phone number (Required)",
                                    require: true,
                                }}
                                onChange={handlePhoneNumberChange}
                                value={phoneNumber}
                            />
                        </Grid>
                    </>
                )}
                {currentStep === 2 && (
                    <>
                        <Grid className="first-name-grid" xs={12}>
                            <TextField
                                aria-label="Artist City"
                                color="secondary"
                                helperText="Required"
                                label="City"
                                name="city"
                                placeholder="city"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="first-name-grid" xs={12}>
                            <Select
                                color="secondary"
                                defaultValue={states[1]}  
                                name="state"  
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
                    </>
                )}
                {currentStep === 3 && (
                    <>
                        <Grid className="genre-options-grid" xs={12}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel 
                                color="secondary"
                                id="select-label"
                            >
                            </InputLabel>
                            <Select 
                                aria-label="Artist Genres"
                                color="secondary"
                                id="artist-genres"
                                input={<OutlinedInput />}
                                onChange={handleGenreSelectionChange}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                        {selected.map((value: string, index: number) => (
                                            <Chip color="secondary" key={index} label={value} variant="outlined" />
                                        ))}
                                    </Box>
                                )}
                                placeholder="Genre"
                                value={selectedGenres}
                                fullWidth
                                multiple
                                required
                            >
                                {genres.map((genre, index) => (
                                    <MenuItem 
                                        key={index}
                                        value={genre}
                                    >
                                        <Checkbox checked={selectedGenres.indexOf(genre) > -1} color="secondary" />
                                        <ListItemText primary={genre} />
                                    </MenuItem>
                                ))}
                            </Select>
                            </FormControl>
                        </Grid>
                    </>
                )}
                {currentStep === 4 && (
                    <>
                        <Grid className="first-name-grid" xs={12}>
                            <TextField
                                aria-label="Artist Spotify Link"
                                color="secondary"
                                helperText="Spotify URL (Optional)"
                                label="Spotify URL"
                                name="spotifyLink"
                                placeholder="Spotify URL"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="first-name-grid" xs={12}>
                            <TextField
                                aria-label="Artist YouTube Link"
                                color="secondary"
                                helperText="YouTube URL (Optional)"
                                label="YouTube URL"
                                name="youtubeLink"
                                placeholder="YouTube URL"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid className="first-name-grid" xs={12}>
                            <TextField
                                aria-label="Artist SoundCloud Link"
                                color="secondary"
                                helperText="SoundCloud URL (Optional)"
                                label="SoundCloud URL"
                                name="soundcloudLink"
                                placeholder="SoundCloud URL"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                    </>
                )}
                <div className="back-next-button-row">
                    <AudioSwipeButton color="secondary" onClick={handleBackStep} text="back" />
                    {currentStep === steps.length ? (
                        <AudioSwipeButton color="secondary" onClick={handleNextStep} text="submit" />
                    ):  <AudioSwipeButton color="secondary" onClick={handleNextStep} text="next" />
                    }
                </div>
            </Paper>
        </SignupArtistContainer>
    );
}