import create from 'zustand';
import { persist } from 'zustand/middleware';
import { ArtistType } from '../typings';

type Artist = ArtistType & {
    isLoggedIn?: boolean;
}

type UseUserStateType = {
  artist: Artist | {} | any;
}

type UseUserActionsType = {
    clearArtist: () => void;
    setArtist: (artist: ArtistType) => void;
}

export const useUserData = create(
    persist<UseUserStateType & UseUserActionsType>(
      (set) => ({
        artist: {},
        clearArtist: () => set(() => ({ artist: {} })),
        setArtist: (artist: ArtistType) => set(() => ({ artist })),
      }),
      {
        name: 'artist-data-storage',
      },
    ),
  );