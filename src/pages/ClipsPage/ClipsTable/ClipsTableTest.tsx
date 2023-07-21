import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { DataGrid, GRID_CHECKBOX_SELECTION_COL_DEF, GridRowApi, GridRowId, GridRowParams  } from '@mui/x-data-grid';
import { colors } from '../../../components';
import { 
    ClipsTableDisLikesCell,
    ClipsTableLikesCell,
    ClipsTableNameCell,
    ClipsTablePlayStopButtonCell,
} from './components/cells';
import { SongDataType, SongTableRowType } from '../typings/songTableRowType';
import useFetchArtistSongs from './hooks/useFetchArtistSongs';
import useFetchTestData from './hooks/useFetchTestData';
import axios from 'axios';
import { useUserData } from '../../../hooks';
import {
    MaterialReactTable,
    type MRT_ColumnDef,

} from 'material-react-table';

const ClipsTableContainer = styled.div`
    background-color: ${colors.white};
    height: 300px;
    text-overflow: clipped;
    width: 100%;

    .MuiDataGrid-root .MuiDataGrid-cell:focus-within {
        outline: none !important;
    }
`;

type ClipsTableDisplayLayerProps = {
    artistSongs: any;
    isLoading: boolean;
}

const data: SongDataType[] = [
    {
        albumCover: '1689809436654-albumCover.jpeg',
        disLikes: ['kdngakgkdakdkmkag', 'kdmkamgkagka', 'dkkdagkadmgks', 'damgkegadkmgdka', 'dkagndkagkgmakldla', 'kdnkagkdadkmkgldgak', 'kdmgkakglalgldaldla', 'kndgakamgkdakgdsmkdgak', 'dmagkdmgkagamdgsdmglamlg', 'dskmklgamalmldgdlamg', 'kdnakgkdkagmk', 'dakdmgakgakgka', 'kdsmgaksdgmagmkla', 'kdgakmkgmkamgkgak'],
        _id: "1",
        likes: ['jdnjagnoagdo', 'jkdnoagndagdg', 'dkadokdglng'],
        name: 'Down on donors',
        songMediaId: '1689812059779-song.mp3',
    },
    {
        albumCover: '1689812059752-albumCover.jpg',
        disLikes: ['kdngakgkdakdkmkag', 'kdmkamgkagka', 'dkkdagkadmgks', 'damgkegadkmgdka', 'dkagndkagkgmakldla', 'kdnkagkdadkmkgldgak', 'kdmgkakglalgldaldla', 'kndgakamgkdakgdsmkdgak', 'dmagkdmgkagamdgsdmglamlg', 'dskmklgamalmldgdlamg'],
        _id: "2",
        likes: ['kdgkjnakgjdagl', 'jkndagnaglkaa', 'dkamdagoad', 'kdnakgnjkaggawk', 'jdnajknkadskgamko'],
        name: 'The liberal truth',
        songMediaId: '1689809436712-song.mp3',
    },
    {
        albumCover: '1689854702677-albumCover.jpg',
        disLikes: ['kdngakgkdakdkmkag', 'kdmkamgkagka', 'dkkdagkadmgks', 'damgkegadkmgdka', 'dkagndkagkgmakldla', 'kdnkagkdadkmkgldgak', 'kdmgkakglalgldaldla', 'kndgakamgkdakgdsmkdgak', 'dmagkdmgkagamdgsdmglamlg', 'dskmklgamalmldgdlamg'],
        _id: "3",
        likes: ['kdgkjnakgjdagl', 'jkndagnaglkaa', 'dkamdagoad', 'kdnakgnjkaggawk', 'jdnajknkadskgamko'],
        name: 'Tucker & Tim',
        songMediaId: '1689854702706-song.mp3',
    },
];

const newColumns = useMemo<MRT_ColumnDef<SongDataType>[]>(
    () => [
        {
            accessorKey: 'name',
            header: 'Clip',
        },
        {
            accessorKey: 'likes',
            header: 'Likes',
        },
        {
            accessorKey: 'disLikes',
            header: 'Dislikes',
        },
        {
            accessorKey: 'songMediaId',
            header: 'Play',
        },
    ],
    []
);

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
        type: 'number',
        valueGetter: (params: any) => {
            return params.row.likes.length;
        },
    },
    {
        description: 'Number of dislikes this audio has.',
        field: 'disLikes',
        headerName: 'Dislikes',
        minWidth: 200,
        renderCell: ClipsTableDisLikesCell,
        type: 'number',
        valueGetter: (params: any) => {
            return params.row.likes.length;
        },
    },
    {
        description: 'Play your audio file.',
        field: 'songMediaId',
        headerName: 'Play',
        minWidth: 200,
        renderCell: ClipsTablePlayStopButtonCell,
    },
];

export default function ClipsTableTest() {
    return <ClipsTableTest_DisplayLayer {...useDataLayer()} />
}


function ClipsTableTest_DisplayLayer({
    artistSongs,
    isLoading,
}: ClipsTableDisplayLayerProps) {
    console.log(artistSongs);
    return (
        <ClipsTableContainer>
            <DataGrid 
                columns={columns}
                getRowId={(row: any) => row._id}
                loading={isLoading}
                paginationMode="server"
                rows={data}
                autoHeight
                autoPageSize
                disableColumnSelector
                disableRowSelectionOnClick
                hideFooterSelectedRowCount
            />
        </ClipsTableContainer>
    );
}

function useDataLayer() {
    const { data: artistSongs = [], isLoading } = useFetchArtistSongs();

    return {
        artistSongs,
        isLoading,
    };
}