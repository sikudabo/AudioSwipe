import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useQueryClient } from 'react-query';
import { deleteData } from '../../../../../utils/helpers';
import { SongTableRowType } from '../../../typings/songTableRowType';
import { useHandleToastMessage } from '../../../../../utils';
import { useIsFormLoading } from '../../../../../utils/forms';
import { useUpdateAudioPlayer } from '../../../../../contexts/MusicPlayerContext';

export default function ClipsTableDeleteCell({ row }: SongTableRowType) {
    const { _id, songMediaId } = row;
    return <ClipsTableDeleteCell_DisplayLayer {...useDataLayer(_id, songMediaId)} />;
}

type ClipsTableDeleteCellDisplayLayerProps = {
    handleDelete: () => void;
};

function ClipsTableDeleteCell_DisplayLayer({ handleDelete }: ClipsTableDeleteCellDisplayLayerProps) {
    return (
        <IconButton 
            aria-label="Song Delete Button"
            color="primary"
            onClick={handleDelete}
            size="large"
        >
            <DeleteIcon />
        </IconButton>
    );
}

function useDataLayer(_id: string, songMediaId: string) {
    const queryClient = useQueryClient();
    const { setIsLoading } = useIsFormLoading();
    const { showToastMessage } = useHandleToastMessage();
    const { stopAudio } = useUpdateAudioPlayer();

    async function handleDelete() {
        setIsLoading(true);
        
        await deleteData({
            url: `api/delete-song/${_id}/${songMediaId}`,
        }).then(response => {
            const { isSuccess, message } = response;

            if (isSuccess) {
                queryClient.invalidateQueries('fetchArtistSongs');
                setIsLoading(false);
                showToastMessage({
                    isError: false,
                    message,
                });
                stopAudio();
                return;
            }

            setIsLoading(false);

            showToastMessage({
                isError: true,
                message,
            });

            return;
        }).catch(() => {
            setIsLoading(false);
            showToastMessage({
                isError: true,
                message: 'There was an error deleting that song. Please try again!',
            });
            return;
        });
    }

    return {
        handleDelete,
    }
}