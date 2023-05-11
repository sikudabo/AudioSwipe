import React from 'react';
import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';

type AudioSwipeButtonProps = ButtonProps & {
    text: string;
}

const StyledButton = styled(Button)`
    padding: 10px;
`;

export default function AudioSwipeButton(props: AudioSwipeButtonProps) {
    const { text } = props;

    return (
        <StyledButton {...props}>
            {text}
        </StyledButton>
    );
}