import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';

export default function RadioButtonsGroup() {
    const [selectedCandidate, setSelectedCandidate] = useState<string>('');
    const [isError, setIsError] = useState(false);

    function handleChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setSelectedCandidate(value);
    }

    function handleSubmit() {
        if (!selectedCandidate) {
            setIsError(true);
            return;
        }

        setIsError(false);
    }
    return (
        <Radio name='canidate' value={selectedCandidate} />
              
    );
}