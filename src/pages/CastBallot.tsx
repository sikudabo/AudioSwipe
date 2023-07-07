import React, { useState } from 'react';
import { TextInput, FormSelect } from '../components';
import { useForm } from 'react-hook-form';
import Select from '@mui/material/Select';
import Button from '../components/Button';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { postData } from '../utils/helpers';

export default function CastBallot() {
    const [selectedCandidate, setSelectedCandidate] = useState('Ronny');
    const [isSending, setIsSending] = useState(false);

    const candidates = [
        {
            name: 'Ronny',
            value: 'Ronny',
        },
        {
            name: 'Jess',
            value: 'Jess',
        },
        {
            name: 'Brad',
            value: 'Brad',
        },
    ];

    function handleChange(event: { target: { value: string }}) {
        console.log('e is:', event);
        const { value } = event.target;
        setSelectedCandidate(value);
    }

    async function handleSubmit() {
        setIsSending(true);
        let data = {
            candidateId: '1',
            electionId: '1',
            votedFor: 'Ronny Morrell',
            voterId: '28',
        };

        const createElectionData = {
            electionId: '97',
            electionName: 'Marion Mayoral Race',
            candidates: [
                {
                    name: 'Ronny Morrell',
                    id: '1',
                    votes: 0,
                    voters: [],
                },
                {
                    name: 'Brad Luzzader',
                    id: '2',
                    votes: 0,
                    voters: [],
                },
                {
                    name: 'Jeff Alumbaugh',
                    id: '3',
                    votes: 0,
                    voters: [],
                },
            ],
        };

        const response = await postData({
            data: createElectionData,
            url: `${process.env.REACT_APP_BASE_URI}api/createElection`,
            contentType: 'application/json',
        }).then(res => {
            setIsSending(false);
            return res.data;
        }).catch(err => {
            setIsSending(false);
            console.log('Error:', err);
        });
        setIsSending(false);
        console.log('The response was:', response);
    }

    return (
        <div>
            <div>
                Vote!
            </div>
            <FormControl fullWidth>
                <InputLabel color="secondary" id="marion-election-label">
                    Marion Mayoral Race
                </InputLabel>
                <Select 
                    color="secondary"
                    id="election-select"
                    label="Marion Mayoral Race"
                    labelId="marion-election-label"
                    onChange={handleChange}
                    value={selectedCandidate}
                    variant="outlined"
                >
                {candidates.map((candidate, index) => (
                    <MenuItem key={index} value={candidate.value}>{candidate.name}</MenuItem>
                ))}
                </Select>
            </FormControl>
            <div>
            </div>
        </div>
    );
}