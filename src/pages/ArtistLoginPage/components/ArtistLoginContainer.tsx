import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { colors } from '../../../components';
import ArtistLoginBackground from '../../../audio-media/performing.jpeg';

export const ArtistLoginContainer = styled(Grid)`
    align-items: center;
    background: url(${ArtistLoginBackground});
    background-size: cover;
    height: 100vh;
    justify-content: center;
    max-width: 100vw;
    opacity: 0.7;
    padding-top: 50px;
`   