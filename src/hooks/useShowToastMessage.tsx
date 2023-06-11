import { create} from 'zustand';

type ShowToastMessageStateType = {
    isError: boolean;
    isToastVisible: boolean;
    message: string;
};

type ShowToastMessageActionsType = {
    handleToastMessageChange: (isOpen: boolean) => void;
    setIsError: (isError: boolean) => void;
    setToastMessage: (message: string) => void;
}

export const useShowToastMessage = create<ShowToastMessageActionsType & ShowToastMessageStateType>()((set) => ({
    handleToastMessageChange: (isOpen: boolean) => set(() => ({ isToastVisible: isOpen })),
    isError: false,
    isToastVisible: false,
    message: '',
    setIsError: (isError: boolean) => set(() => ({ isError })),
    setToastMessage: (message: string) => set(() => ({ message })),
}));