import create from 'zustand';
import { persist } from 'zustand/middleware';
import { ArtistType } from '../typings';

type UseUserStateType = {
    artist: ArtistType & {
        isLoggedIn?: boolean;
    } | {};
};

type UseUserActionsType = {
    clearArtist: () => void;
    setArtist: (artist: ArtistType) => void;
}

export const useUserData = create(
    persist<UseUserStateType | {} & UseUserActionsType>(
      (set) => ({
        artist: {},
        clearArtist: () => set(() => ({ artist: {} })),
        setArtist: (artist: boolean) => set(() => ({ artist })),
      }),
      {
        name: 'artist-data-storage',
      },
    ),
  );