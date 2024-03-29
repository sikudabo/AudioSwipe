import React from 'react';
import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';

export type AudioSwipeButtonProps = ButtonProps & {
    text: string;
}

const StyledButton = styled(Button)`
    padding: 10px;
    font-weight: 900;
    text-transform: none;
`;

export default function AudioSwipeButton(props: AudioSwipeButtonProps) {
    const { text } = props;

    return (
        <StyledButton disableRipple={true} disableFocusRipple={true} disableElevation={true} {...props}>
            {text}
        </StyledButton>
    );
}