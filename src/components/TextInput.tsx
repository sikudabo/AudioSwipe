import React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material';

type TextInputProps = Omit<TextFieldProps, 'sx'>;

export default function TextInput({ color, defaultValue, variant }: TextInputProps) {
    return (
        <TextField color={color} defaultValue={defaultValue} variant={variant} />
    );
}