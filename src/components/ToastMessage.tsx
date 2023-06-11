import React, { useMemo } from 'react';
import Alert from '@mui/material/Alert';
import SnackBar from '@mui/material/Snackbar';
import { useShowToastMessage } from '../hooks';

type ToastMessageDisplayLayerProps = {
    duration?: number;
    handleClose: () => void;
    isError?: boolean;
    isOpen: boolean;
    message?: string;
};

export default function ToastMessage({ duration }: { duration: number }) {
    return <ToastMessageDisplayLayer duration={duration} {...useDataLayer()} />;
}


function ToastMessageDisplayLayer({
    duration = 5000,
    handleClose,
    isError = false,
    isOpen,
    message = '',
}: ToastMessageDisplayLayerProps) {
    return (
        <SnackBar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} autoHideDuration={duration} open={isOpen} onClose={handleClose}>
            <Alert onClose={handleClose} severity={isError ? 'error' : 'success'} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </SnackBar>
    );
}

function useDataLayer() {
    const { handleToastMessageChange, isError, isToastVisible, message } = useShowToastMessage();

    const isOpen = useMemo(() => {
        return isToastVisible;
    }, [isToastVisible]);

    function handleClose() {
        handleToastMessageChange(false);
    }

    return {
        handleClose,
        isError,
        isOpen,
        message,
    };
}