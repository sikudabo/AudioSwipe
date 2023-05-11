import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function SliderComponent() {
    const [volume, setVolume] = useState(0);

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 25,
            label: '25',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 75,
            label: '75',
        },
        {
            value: 100,
            label: '100',
        },
    ];

    function handleChange(event: Event, newVal: number | number[]) {
        setVolume(newVal as number);
    }

    return (
        <Box sx={{ mt: 10, width: 200 }}>
            <Stack alignItems="center" direction="row" spacing={2} sx={{ mb: 1 }}>
                <VolumeDownIcon />
                <Slider 
                    aria-label="volume"
                    color="secondary"
                    min={0}
                    max={100}
                    marks={marks}
                    onChange={handleChange}
                    step={10}
                    size="medium"
                    value={volume}
                    valueLabelDisplay="auto"
                />
                <VolumeUpIcon/>
            </Stack>
            <Slider aria-label="Disabled slider" defaultValue={30} disabled />
        </Box>
    );
}