/* eslint-disable react/jsx-pascal-case */
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import TinderCard from 'react-tinder-card';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useIsDarkMode } from './hooks';
import {
  AudioSwipeAppBar,
  BoxExample,
  GridExample,
  ImageListExample,
  SelectComponent,
  SliderComponent,
  StackExample,
  colors,
} from './components';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import './BodyStyles.css';
import { LandingPage } from './pages';
const CatchWreckMp3 = require('./audio-media/catch-wreck.mp3');

const CustomStyledContainer = styled.div`
  padding: 0;
  font-family: 'Varela Round';
  margin-right: 0px;
  margin-left: 0px;
`;

type AppDisplayLayerProps = {
  isDarkMode: boolean;
};

function App() {
  return <App_DisplayLayer {...useDatalayer()} />;
}

function App_DisplayLayer({ isDarkMode }: AppDisplayLayerProps) {
  const audioRef = useRef<any>();
  const [isPaused, setIsPaused] = useState(false);

  function onSwipe(direction: string) {
    console.log('The direction is:', direction);
  }

  const people = [
    {
      name: 'Simeon',
      age: 30,
    },
    {
      name: 'Alyssa',
      age: 30,
    },
    {
      name: 'Kyle',
      age: 40,
    },
  ];

  const theme: ThemeOptions = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'dark',
      error: {
        main: colors.error,
      },
      info: {
        main: colors.info,
      },
      primary: {
        main: colors.primary,
        light: colors.primary,
        dark: colors.lightGrey,
      },
      secondary: {
        main: colors.secondary,
        dark: colors.secondary,
      },
      success: {
        main: colors.success,
      },
      warning: {
        main: colors.warning,
      },
      cream: {
        main: colors.cream,
      },
      crimson: {
        main: colors.crimson,
      }
    },
    typography: {
      fontFamily: 'Varela Round',
    },
  });

  function handleDurationChange(data: any) {
    console.log(data);
  }

  function handlePlayStart() {
    audioRef.current.playbackRate = 0.85;
  }


  function handlePause() {
    setIsPaused(!isPaused);
    if (isPaused) {
      audioRef?.current.pause();
      return;
    }

    audioRef.current.play();
  }

  function rewindTrack() {
    audioRef.current.currentTime += 30;
  }

  function handleTimeUpdate() {
    if (audioRef.current.currentTime > 500) {
      audioRef.current.currentTime = 0;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CustomStyledContainer>
        <CssBaseline />
        <AudioSwipeAppBar />
        <LandingPage />
      </CustomStyledContainer >
    </ThemeProvider>
  );
}

function useDatalayer() {
  const { isDarkMode } = useIsDarkMode();
  return {
    isDarkMode,
  }
}

export default App;