import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Box, Chip, MenuItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

const candidates: string[] = [
    "Ronny Morrell",
    "Kevin Markson",
    "Moreley Tims",
];

export default function SelectComponent() {
    const [chosenCandidates, setChosenCandidates] = useState<string[]>([]);

    function handleChange(e: { target: { value: any }}) {
        const { value: values } = e.target;
        console.log('The values are:', values);
        setChosenCandidates(values);
    }

    function handleRemoveCandidate(candidateName: string) {
        console.log('The candidate name is:', candidateName);
        setChosenCandidates((chosenCandidates) => chosenCandidates.filter((candidate) => candidate !== candidateName))
    }

    return (
        <FormControl sx={{ m: 1, width: '50%' }}>
            <InputLabel 
                color="secondary"
                id="select-label"
            >
                Candidates
            </InputLabel>
            <Select
                color="secondary"
                id="demo-select"
                input={<OutlinedInput label="Candidates" />}
                labelId="select-label"
                onChange={handleChange}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                        {selected.map((value, index) => (
                            <Chip color="secondary" key={index} label={value} onDelete={() => handleRemoveCandidate(value)} variant="outlined" />
                        ))}
                    </Box>
                )}
                placeholder="text"
                value={chosenCandidates}
                multiple
                required
            >
                <MenuItem value="" disabled>Select a Candidate</MenuItem>
                {candidates.map((candidate, index) => (
                    <MenuItem
                        key={index}
                        value={candidate}
                    >
                        <Checkbox checked={chosenCandidates.indexOf(candidate) > -1} color="secondary" />
                        <ListItemText primary={candidate} />
                    </MenuItem>
                ))}
            </Select>

        </FormControl>
    )

}