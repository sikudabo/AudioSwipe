import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ArtistLoginContainer } from './components/ArtistLoginContainer';
import { ArtistType } from '../../typings';
import { useHandleToastMessage } from '../../utils';
import { AudioSwipeButton } from '../../components';
import { useIsFormLoading } from '../../utils/forms';

export default function ArtistLoginPage() {
    return <ArtistLoginPage_DisplayLayer {...useDataLayer()} />;
}

function ArtistLoginPage_DisplayLayer() {
    return (
        <ArtistLoginContainer columns={12} columnSpacing={0} container>
            <Paper className="form-paper-wrapper" elevation={5}>
                <div className="form-header-text-container">
                    <p className="form-header-text">
                        Login
                    </p>
                </div>
                <div className="form-content-container">
                    <form>
                        <Grid className="username-grid" xs={12}>
                            <TextField
                                aria-label="Username"
                                color="secondary"
                                helperText="Required"
                                label="Username"
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
                                helperText="Required"
                                label="Password"
                                placeholder="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                    </form>
                </div>
                <div className="buttons-container">
                    <AudioSwipeButton color="error" variant="contained" text="Forgot ?" />
                    <AudioSwipeButton className="confirm-button" color="secondary" variant="contained" text="Login" />
                </div>
            </Paper>
        </ArtistLoginContainer>
    );
}

function useDataLayer() {
    return {

    }
}