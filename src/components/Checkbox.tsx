import React, { useMemo, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

type NamesStateProps = { [key: string]: boolean };

export default function MyCheckbox() {
    const [names, setNames] = useState<NamesStateProps>({
        ryan: false,
        kyle: true,
        lionel: false,
    });

    const isError = useMemo(() => {
       return names.ryan === false;
    }, [names]);

    function handleChange(e: { target: { checked: boolean; value: string; }}) {
        const { checked, value } = e.target;
        setNames({ ...names, [value]: checked });
    }

    return (
        <FormControl color="secondary" component="fieldset" error={isError} variant="standard">
            <FormLabel component="legend">Select an election boss</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={names.ryan} color="secondary" onChange={handleChange} value="ryan" />}
                    label="Ryan Polar"
                />
                <FormControlLabel
                    control={<Checkbox checked={names.kyle} color="secondary" onChange={handleChange} value="kyle" />}
                    label="Kyle Miller"
                />
                <FormControlLabel   
                    control={<Checkbox checked={names.lionel} color="secondary" onChange={handleChange} value="lionel" />}
                    label="Lionel Sanders"
                />
            </FormGroup>
            <FormHelperText>
                This decision cannot be changed later
            </FormHelperText>
        </FormControl>
    )
}