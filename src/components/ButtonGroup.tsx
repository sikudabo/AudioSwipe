import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DropdownIcon from '@mui/icons-material/ArrowDropDown';

export default function MyButtonGroup() {
    return (
        <ButtonGroup 
            color="secondary"
            size="large"
            variant="outlined"
        >
            <Button size="large">
                Squash & Merge
            </Button>
            <Button size="small">
                <DropdownIcon />
            </Button>
        </ButtonGroup>
    )
}