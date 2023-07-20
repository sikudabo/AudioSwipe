import React, { 
    createContext,
    useContext, 
    useEffect,
    useRef,
    useState
} from 'react';

const AudioPlayerStateContext = createContext<any>({});
const AudioPlayerUpdateContext = createContext<any>({});

function AudioPlayerContextProvider({ children }: { children: React.ReactNode }) {
    const artistAudioPlayerRef = useRef();

    function changeAudioSource(source: string) {
        (artistAudioPlayerRef.current as any).src = source;
    }

    function playAudio() {
        (artistAudioPlayerRef as any).current.play();
    }

    function stopAudio() {
        (artistAudioPlayerRef as any).current.stop();
    }

    return (
        <AudioPlayerStateContext.Provider 
            value={{ artistAudioPlayerRef }}
        >
            <AudioPlayerUpdateContext.Provider 
                value={{
                    changeAudioSource,
                    playAudio,
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