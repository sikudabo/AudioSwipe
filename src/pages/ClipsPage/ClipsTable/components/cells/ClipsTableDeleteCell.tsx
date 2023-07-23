import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { SongTableRowType } from '../../../typings/songTableRowType';

export default function ClipsTableDeleteCell() {
    return <ClipsTableDeleteCell_DisplayLayer {...useDataLayer()} />;
}

function ClipsTableDeleteCell_DisplayLayer() {
    return (
        <IconButton 
            aria-label="Song Delete Button"
            color="primary"
            size="large"
        >
            <DeleteIcon />
        </IconButton>
    );
}


// Skeleton that will have the delete functionality in it. 
function useDataLayer() {
    return {

    }
}