import React from 'react';
import Fab from '@mui/material/Fab';
import PlusIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

export default function FabButton() {
    return (
        <Fab color="secondary" size="large" variant="extended">
            <Typography>
                Add Candidate 
            </Typography>
            <PlusIcon style={{ marginLeft: 10 }}/>
        </Fab>
    );
}