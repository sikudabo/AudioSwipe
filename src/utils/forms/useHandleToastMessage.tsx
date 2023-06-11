import { useShowToastMessage } from "../../hooks";

export const useHandleToastMessage = () => {
    const { handleToastMessageChange, setIsError, setToastMessage } = useShowToastMessage();
    
    function showToastMessage({ isError, message }: { isError: boolean; message: string }) {
        setIsError(isError);
        setToastMessage(message);
        handleToastMessageChange(true);
        setTimeout(() => {
            handleToastMessageChange(false);
            setToastMessage('');
        }, 5000);
    }

    return {
        showToastMessage,
    }
}