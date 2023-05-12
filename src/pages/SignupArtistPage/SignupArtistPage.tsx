import React, { useMemo, useState } from 'react';
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
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<any>([]);
    const steps = [
        "Peronsal Information",
        "Contact Information",
        "Location Information",
        "Genres",
        "Social Links",
    ];

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