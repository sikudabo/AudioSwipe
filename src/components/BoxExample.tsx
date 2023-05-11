import React from 'react';
import Box from '@mui/material/Box';

export default function BoxExample() {
    return (
        <Box 
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'secondary.light',
                '&:hover': {
                    backgroundColor: 'secondary.dark',
                    opacity: 0.5,
                },
            }}
        />
    );
}