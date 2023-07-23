import React from 'react';
import styled from '@emotion/styled';
import { DataGrid, GRID_CHECKBOX_SELECTION_COL_DEF, GridRowApi, GridRowId, GridRowParams  } from '@mui/x-data-grid';
import { colors } from '../../../components';
import { 
    ClipsTableDeleteCell,
    ClipsTableDisLikesCell,
    ClipsTableLikesCell,
    ClipsTableNameCell,
    ClipsTablePlayStopButtonCell,
} from './components/cells';
import { SongDataType, SongTableRowType } from '../typings/songTableRowType';
import useFetchArtistSongs from './hooks/useFetchArtistSongs';

const ClipsTableContainer = styled.div`
    background-color: ${colors.white};
    height: 300px;
    text-overflow: clipped;
    width: 100%;

    .MuiDataGrid-root .MuiDataGrid-cell:focus-within {
        outline: none !important;
    }

    &.MuiDataGrid-root .MuiDataGrid-cell:focus {
        outline: none !important;
    }

    .MuiDataGrid-columnHeader:focus {
        outline: none;
    }

    .MuiDataGrid-colCell:focus {
        outline: none;
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
        alignment: 'right',
        description: 'Play your audio file.',
        disableColumnMenu: true,
        disableReorder: true,
        field: 'songMediaId',
        filterable: false,
        headerAlignment: 'right',
        headerName: 'Play',
        minWidth: 200,
        renderCell: ClipsTablePlayStopButtonCell,
        sortable: false,
    },
    {
        description: 'Delete a song.',
        disableColumnMenu: true,
        disableReorder: true,
        field: '_id',
        filterable: false,
        flex: 1,
        headerName: 'Delete',
        minWidth: 200,
        renderCell: ClipsTableDeleteCell,
        sortable: false,
    },
];

export default function ClipsTableTest() {
    return <ClipsTableTest_DisplayLayer {...useDataLayer()} />
}


function ClipsTableTest_DisplayLayer({
    artistSongs,
    isLoading,
}: ClipsTableDisplayLayerProps) {

    return (
        <ClipsTableContainer>
            <DataGrid 
                columns={columns}
                getRowId={(row: any) => row._id}
                loading={isLoading}
                paginationMode="server"
                rows={artistSongs}
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