import React from 'react';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import PhoneInput from 'react-phone-input-material-ui';
import styled from '@emotion/styled';
import { Navigate } from 'react-router-dom';
import {
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
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
import { AudioSwipeButton } from '../../components';

export default function SignupArtistPage() {
    return (
        <SignupArtistContainer columns={12} columnSpacing={0} container>
            <Typography variant="h6">
                Sign Up Page
            </Typography>
        </SignupArtistContainer>
    );
}