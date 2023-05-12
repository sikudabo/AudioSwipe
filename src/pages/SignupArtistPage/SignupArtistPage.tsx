import React, { useEffect, useMemo, useRef, useState } from 'react';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CheckIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import PhoneInput from 'react-phone-input-material-ui';
import styled from '@emotion/styled';
import { Navigate } from 'react-router-dom';
import {
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    Hidden,
    Paper,
    Select,
    Step,
    Stepper,
    StepLabel,
    TextField,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
import { SignupArtistContainer } from './components/SignupArtistContainer';
import { colors, AudioSwipeButton } from '../../components';

export default function SignupArtistPage() {
    const headerTextRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<any>([]);
    const steps = [
        "Peronsal Information",
        "Contact Information",
        "Location Information",
        "Genres",
        "Social Links",
    ];

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