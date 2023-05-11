import create from 'zustand';
import { persist } from 'zustand/middleware';

type IsDarkModeStateType = {
    isDarkMode: boolean;
};

type IsDarkModeActionsType = {
    toggleDarkMode: (darkModeState: boolean) => void;
};

export const useIsDarkMode = create(
    persist<IsDarkModeStateType & IsDarkModeActionsType>(
      (set) => ({
        isDarkMode: false,
        toggleDarkMode: (isDarkMode: boolean) =>
          set(() => ({
            isDarkMode,
          })),
      }),
      {
        name: 'darkmode-enabled-storage',
      },
    ),
  );