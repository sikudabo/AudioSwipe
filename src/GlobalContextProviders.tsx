import React from 'react';
import { AudioPlayerContextProvider } from './contexts/MusicPlayerContext';

export default function GlobalContextProviders({ children }: { children: React.ReactNode }) {
    return (
        <AudioPlayerContextProvider>
            {children}
        </AudioPlayerContextProvider>
    );
}