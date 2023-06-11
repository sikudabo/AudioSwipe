import { create} from 'zustand';

type ShowToastMessageStateType = {
    isToastVisible: boolean;
    message: string;
};

type ShowToastMessageActionsType = {
    handleToastMessageChange: (isOpen: boolean) => void;
    setToastMessage: (message: string) => void;
}

export const useShowToastMessage = create<ShowToastMessageActionsType & ShowToastMessageStateType>()((set) => ({
    handleToastMessageChange: (isOpen: boolean) => set(() => ({ isToastVisible: isOpen })),
    isToastVisible: false,
    message: '',
    setToastMessage: (message: string) => set(() => ({ message: message })),
}));