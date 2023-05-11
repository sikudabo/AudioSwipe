import React from 'react';
import Button from '@mui/material/Button';

export default function MyButton() {
    return (
        <>
            <Button>
                Hello, world!
            </Button>
            <Button variant="contained">
                Hello, contained!
            </Button>
            <Button variant="outlined">
                Hello, outlined!
            </Button>
        </>
    )
}