import React from 'react';
import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';
import { DataGrid, GRID_CHECKBOX_SELECTION_COL_DEF  } from '@mui/x-data-grid';
import { colors } from '../../../components';
import { 
    ClipsTableDisLikesCell,
    ClipsTableLikesCell,
    ClipsTableNameCell,
} from './components/cells';

const ClipsTableContainer = styled.div`
    background-color: ${colors.white};
    height: 300px;
    text-overflow: clipped;
    width: 100%;
`;

const data = [
    {
        albumCover: '1689809436654-albumCover.jpeg',
        disLikes: ['kdngakgkdakdkmkag', 'kdmkamgkagka', 'dkkdagkadmgks', 'damgkegadkmgdka', 'dkagndkagkgmakldla', 'kdnkagkdadkmkgldgak', 'kdmgkakglalgldaldla', 'kndgakamgkdakgdsmkdgak', 'dmagkdmgkagamdgsdmglamlg', 'dskmklgamalmldgdlamg', 'kdnakgkdkagmk', 'dakdmgakgakgka', 'kdsmgaksdgmagmkla', 'kdgakmkgmkamgkgak'],
        _id: 1,
        likes: ['jdnjagnoagdo', 'jkdnoagndagdg', 'dkadokdglng'],
        name: 'Down on donors',
    },
    {
        albumCover: '1689812059752-albumCover.jpg',
        disLikes: ['kdngakgkdakdkmkag', 'kdmkamgkagka', 'dkkdagkadmgks', 'damgkegadkmgdka', 'dkagndkagkgmakldla', 'kdnkagkdadkmkgldgak', 'kdmgkakglalgldaldla', 'kndgakamgkdakgdsmkdgak', 'dmagkdmgkagamdgsdmglamlg', 'dskmklgamalmldgdlamg'],
        _id: 2,
        likes: ['kdgkjnakgjdagl', 'jkndagnaglkaa', 'dkamdagoad', 'kdnakgnjkaggawk', 'jdnajknkadskgamko'],
        name: 'The liberal truth',
    },
];

const columns = [
    {
        ...GRID_CHECKBOX_SELECTION_COL_DEF,
        backgroundColor: colors.secondary,
    },
    {
        description: 'The name of your audio file and album cover',
        field: 'name',
        headerName: 'Clip',
        minWidth: 300,
        renderCell: ClipsTableNameCell,
    },
    {
        description: 'The number of likes this audio has.',
        field: 'likes',
        headerName: 'Likes',
        minWidth: 200,
        renderCell: ClipsTableLikesCell,
    },
    {
        description: 'Number of dislikes this audio has.',
        field: 'disLikes',
        headerName: 'Dislikes',
        minWidth: 200,
        renderCell: ClipsTableDisLikesCell,
    },
];


export default function ClipsTableTest() {
    return (
        <ClipsTableContainer>
            <DataGrid 
                columns={columns}
                getRowId={(row: any) => row._id}
                rows={data}
                rowHeight={100}
                checkboxSelection
                disableColumnSelector
                disableRowSelectionOnClick
                hideFooterSelectedRowCount
            />
        </ClipsTableContainer>
    );
}