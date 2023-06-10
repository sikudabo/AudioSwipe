import React, { useEffect, useMemo, useRef, useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PhoneInput from 'react-phone-input-material-ui';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
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
    Typography,
    Unstable_Grid2 as Grid,
    IconButton,
    FormHelperText,
    Box,
    Chip,
    ListItemText
} from '@mui/material';
import { ArtistType } from '../../typings';
import { SignupArtistContainer } from './components/SignupArtistContainer';
import { colors, AudioSwipeButton } from '../../components';
import { states } from '../../utils/constants';
import { genres } from '../../utils/constants/genres';

console.log('Testing');

export default function SignupArtistPage() {
    const headerTextRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<any>([]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [artistType, setArtistType] = useState('musician');
    const [selectedGender, setSelectedGender] = useState('female');
    const [selectedArtistState, setSelectedArtistState] = useState(states[0]);
    const { control, formState: { errors }, handleSubmit, register, reset, watch } = useForm<ArtistType>({
        defaultValues: {
            firstName: '',
            lastName: '',
            artistName: '',
            birthday: Date.now(),
            city: '',
            state: '',
            email: '',
            username: '',
            password: '',
            phoneNumber: '',
            genres: [],
            spotifyLink: '',
            soundcloudLink: '',
            youtubeLink: '',
            bio: '',
            gender: '',
        },
        mode: 'onChange',
    });

    const currentGenderSelection = useWatch({
        control,
        name: 'gender',
    });

    console.log('Test');

    useMemo(() => {
        console.log('The current gender selection is:', selectedGender);
    }, [selectedGender]);
    const steps = [
        "Peronsal Information",
        "Contact Information",
        "Location Information",
        "Genres",
        "Social Links",
    ];

    function handlePhoneNumberChange(e: { target: { value: string }}) {
        const { value } = e.target;
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

    function handleSave(data: ArtistType) {
        console.log('The data is:', data);
    }

    function handleSelectedGenderChange(e: { target: { value: string }}) {
        const { value: gender } = e.target;
        setSelectedGender(gender);
    }

    function DateTextField(props: any) {
        return <TextField {...props} />;
    }

    function CustomPhoneInput(props: any) {
        return <TextField {...props} color="secondary" />;
    }

    function handleSelectedArtistStatechange(e: { target: { value: string }}) {
        const { value } = e.target;
        setSelectedArtistState(value);
    }

    function handleArtistTypeChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setArtistType(value);
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
                <form onSubmit={handleSubmit(handleSave)}>
                    {currentStep === 0 && (
                        <div>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="First Name"
                                    color="secondary"
                                    helperText="Required"
                                    label="First Name"
                                    placeholder="First Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('firstName')}
                                />
                            </Grid>
                            <Grid className="last-name-grid" xs={12}>
                                <TextField
                                    aria-label="Last Name"
                                    color="secondary"
                                    helperText="Required"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('lastName')}
                                />
                            </Grid>
                            <Grid className="stage-name-grid" xs={12}>
                                <TextField
                                    aria-label="Stage Name"
                                    color="secondary"
                                    helperText="Required"
                                    label="Stage Name"
                                    placeholder="Stage Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('artistName')}
                                />
                            </Grid>
                            <Grid className="username-grid" xs={12}>
                                <TextField
                                    aria-label="Username"
                                    color="secondary"
                                    helperText="Required"
                                    label="username"
                                    placeholder="Username"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('username')}
                                />
                            </Grid>
                            <Grid className="password-grid" xs={12}>
                                <TextField
                                    aria-label="Password"
                                    color="secondary"
                                    helperText="Must be at least 6 characters long"
                                    inputProps={{ minLength: 6 }}
                                    label="password"
                                    placeholder="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('password')}
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
                                    placeholder="Bio"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    {...register('bio')}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <FormControl>
                                    <FormLabel color="secondary" id="artist-gender-label">
                                        Gender 
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        value={selectedGender}
                                        onChange={handleSelectedGenderChange}
                                    >
                                        <FormControlLabel color="secondary" value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel color="secondary" value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Hidden mdDown>
                                <Grid className="birthday-grid" xs={12}>
                                    <DatePicker 
                                        label="Birthday"
                                        slots={{
                                            textField: DateTextField,
                                        }}
                                        slotProps={{
                                            textField: {
                                                color: 'secondary',
                                                fullWidth: true,
                                                helperText: 'Must be at least 13 (Required)',
                                                required: true,
                                            },
                                        }}
                                        disableFuture
                                        disableOpenPicker 
                                    />
                                </Grid>
                            </Hidden>
                            <Hidden lgUp>
                                    <MobileDatePicker 
                                        label="Birthday"
                                        slots={{
                                            textField: DateTextField,
                                        }}
                                        slotProps={{
                                            textField: {
                                                color: 'secondary',
                                                fullWidth: true,
                                                helperText: 'Must be at least 13 (Required)',
                                                required: true,
                                            },
                                        }}
                                        disableFuture
                                    />
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
                                    placeholder="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('email')}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <PhoneInput
                                    aria-label="Artist Phone number"
                                    component={TextField}
                                    inputProps={{
                                        color: "secondary",
                                        label: "Phone number (Required)",
                                        required: true,
                                    }}
                                    onChange={(e: string) => setPhoneNumber(e)}
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
                                    placeholder="city"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('city')}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <Select
                                    color="secondary"
                                    defaultValue={states[0]} 
                                    onChange={handleSelectedArtistStatechange}
                                    value={selectedArtistState}   
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
                                    placeholder="Genre"
                                    onChange={handleGenreSelectionChange}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5, marginBottom: 100 }}>
                                            {selected.map((value: string, index: number) => (
                                                <Chip color="secondary" key={index} label={value} variant="outlined" />
                                            ))}
                                        </Box>
                                    )}
                                    value={selectedGenres}
                                    fullWidth
                                    multiple
                                    required
                                >
                                    {genres.map((genre, index) => (
                                        <MenuItem 
                                            disabled={selectedGenres.length > 2 && !selectedGenres.includes(genre)}
                                            key={index}
                                            value={genre}
                                        >
                                            <Checkbox checked={selectedGenres.indexOf(genre) > -1} color="secondary" />
                                            <ListItemText primary={genre} />
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>Required (Up to 3)</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid className="artist-type-grid" sx={{ mt: 50 }} xs={12}>
                                <FormControl>
                                    <FormLabel color="secondary" id="artist-type-label">
                                        Artist Type 
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        onChange={handleArtistTypeChange}
                                        value={artistType}
                                    >
                                        <FormControlLabel color="secondary" value="musician" control={<Radio />} label="Musician" />
                                        <FormControlLabel color="secondary" value="podcaster" control={<Radio />} label="Podcaster" />
                                    </RadioGroup>
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
                                    placeholder="Spotify URL"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('spotifyLink')}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist YouTube Link"
                                    color="secondary"
                                    helperText="YouTube URL (Optional)"
                                    label="YouTube URL"
                                    placeholder="YouTube URL"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('youtubeLink')}
                                />
                            </Grid>
                            <Grid className="first-name-grid" xs={12}>
                                <TextField
                                    aria-label="Artist SoundCloud Link"
                                    color="secondary"
                                    helperText="SoundCloud URL (Optional)"
                                    label="SoundCloud URL"
                                    placeholder="SoundCloud URL"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('soundcloudLink')}
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
                </form>
            </Paper>
        </SignupArtistContainer>
    );
}