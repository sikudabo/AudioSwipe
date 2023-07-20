import React, { 
    createContext,
    useContext, 
    useRef,
    useState,
} from 'react';

const AudioPlayerStateContext = createContext<any>({});
const AudioPlayerUpdateContext = createContext<any>({});

function AudioPlayerContextProvider({ children }: { children: React.ReactNode }) {
    const artistAudioPlayerRef = useRef();
    const [currentPlayingSongId, setCurrentPlayingSongId] = useState('');
    const [audioSource, setAudioSource] = useState('');

    function changeAudioSource(source: string) {
        (artistAudioPlayerRef.current as any).src = source;
    }

    function playAudio() {
        (artistAudioPlayerRef as any).current.play();
    }

    function stopAudio() {
        (artistAudioPlayerRef as any).current.pause();
        (artistAudioPlayerRef as any).current.currenTime = 0;
    }

    return (
        <AudioPlayerStateContext.Provider 
            value={{
                artistAudioPlayerRef,
                audioSource,
                currentPlayingSongId,
            }}
        >
            <AudioPlayerUpdateContext.Provider 
                value={{
                    changeAudioSource,
                    playAudio,
                    setAudioSource,
                    setCurrentPlayingSongId,
                    stopAudio,
                }}
            >
                {children}
            </AudioPlayerUpdateContext.Provider>
        </AudioPlayerStateContext.Provider>
    );
}

function useAudioPlayerRef() {
    const context = useContext(AudioPlayerStateContext);
    return context;
}

function useUpdateAudioPlayer() {
    const context = useContext(AudioPlayerUpdateContext);
    return context;
}

export { AudioPlayerContextProvider, useAudioPlayerRef, useUpdateAudioPlayer };