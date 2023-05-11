import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormSelectProps } from './types';

export default function FormSelect(props: FormSelectProps) {
    const { color, defaultValue, handleChange, id, label, labelId, onChange, options, value, variant } = props;
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                {label && (
                    <InputLabel id={labelId}>{label}</InputLabel>
                )}
                <Select 
                    color={color}
                    defaultValue={defaultValue}
                    id={id}
                    label={label}
                    labelId={labelId}
                    onChange={handleChange}
                    value={value}
                    variant={variant}
                >
                    {options.length > 0 && (
                        <div>
                            {options.map((option, index) => (
                                <MenuItem value={option.value}>{option.name}</MenuItem>
                            ))}
                        </div>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}

