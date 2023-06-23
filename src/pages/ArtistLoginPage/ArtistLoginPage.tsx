import React from 'react';
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
        <ArtistLoginContainer columns={12} columnSpacing={0} container />
    );
}

function useDataLayer() {
    return {

    }
}