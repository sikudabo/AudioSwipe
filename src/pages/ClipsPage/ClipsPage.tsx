import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { ClipsPageContainer } from './styles';
import { useAudioPlayerRef, useUpdateAudioPlayer } from '../../contexts/MusicPlayerContext';
import ClipsTableTest from './ClipsTable/ClipsTableTest';
import ExampleWithReactQueryProvider from './ClipsTable/hooks/TestTable';
import useFetchTestData from './ClipsTable/hooks/useFetchTestData';
const CatchWreckMp3 = require('../../audio-media/catch-wreck.mp3');

export default function ClipsPage() {
    return <ClipsPage_DisplayLayer {...useDataLayer()} />;
}

type ClipsPageDisplayLayerProps = {
    artistAudioPlayerRef: any;
    audioSource: string;
    currentPlayingSongId: string;
    data: [{
        name: string;
        age: number;
    }] | undefined;
    handlePlay: () => void;
    isLoading: boolean;
    onEndClearId: () => void;
};

function ClipsPage_DisplayLayer({
    artistAudioPlayerRef,
    audioSource,
    currentPlayingSongId,
    data,
    handlePlay,
    isLoading,
    onEndClearId,
}: ClipsPageDisplayLayerProps ) {
    const [testData, setTestData] = useState(data);

    useEffect(() => {
        if (!data) {
            alert('No data');
            return;
        }
        // console.log('The data is:', data[1]);
        setTestData(data);
    }, [data]);

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <ClipsPageContainer container>
            <audio 
                loop={false}
                onEnded={onEndClearId}
                ref={artistAudioPlayerRef}
                src={CatchWreckMp3}
                hidden 
            />
            <Grid className="top-clips-page-header" container>
                <p 
                    className="top-clips-page-header-text"
                >
                    Audio Clips 
                    <div>
                        {testData?.length}
                    </div>
                </p>
                {typeof data !== 'undefined' && data.length > 0 && (
                    <div>
                        {data.map((person, index) => (
                            <div
                                key={index}
                            >
                                They are {person.name} and their age is {person.age}.
                            </div>
                        ))}
                    </div>
                )}
                <ClipsTableTest />
            </Grid>
        </ClipsPageContainer>
    );
}
function useDataLayer() {
    const { artistAudioPlayerRef, audioSource, currentPlayingSongId } = useAudioPlayerRef();
    const { playAudio, setCurrentPlayingSongId } = useUpdateAudioPlayer();
    let { data = [], isLoading } = useFetchTestData();

    const handlePlay = () => {
        playAudio();
    }

    const onEndClearId = () => {
        setCurrentPlayingSongId('');
    }

    return {
        artistAudioPlayerRef,
        audioSource,
        currentPlayingSongId,
        data,
        handlePlay,
        isLoading,
        onEndClearId,
    };
}