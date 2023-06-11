import React, { useMemo } from 'react';
import Alert from '@mui/material/Alert';
import SnackBar from '@mui/material/Snackbar';
import { useShowToastMessage } from '../hooks';

type ToastMessageDisplayLayerProps = {
    duration?: number;
    handleClose: () => void;
    isOpen: boolean;
    message?: string;
};

export default function ToastMessage({ duration }: { duration: number }) {
    return <ToastMessageDisplayLayer duration={duration} {...useDataLayer()} />;
}


function ToastMessageDisplayLayer({
    duration = 5000,
    handleClose,
    isOpen,
    message = '',
}: ToastMessageDisplayLayerProps) {
    return (
        <SnackBar autoHideDuration={duration} open={isOpen} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </SnackBar>
    );
}

function useDataLayer() {
    const { handleToastMessageChange, isToastVisible, message } = useShowToastMessage();

    const isOpen = useMemo(() => {
        return isToastVisible;
    }, [isToastVisible]);

    function handleClose() {
        handleToastMessageChange(false);
    }

    return {
        handleClose,
        isOpen,
        message,
    };
}