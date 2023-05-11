import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
}));

export default function StackExample() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction={{ sm: 'row', lg: 'column' }} divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                <StyledPaper elevation={10}>
                    Paper
                </StyledPaper>
                <StyledPaper elevation={10}>
                    Paper
                </StyledPaper>
                <StyledPaper elevation={10}>
                    Paper
                </StyledPaper>
            </Stack>
        </Box>
    );
}