/* eslint-disable react/jsx-pascal-case */
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { useIsDarkMode } from './hooks';
import {
  AudioSwipeAppBar,
  ScrollToTop,
  colors,
} from './components';
import './BodyStyles.css';
import { LandingPage, SignupArtistPage } from './pages';

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

  const theme: ThemeOptions = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      error: {
        main: colors.error,
      },
      info: {
        main: colors.hotPink,
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
    },
    typography: {
      fontFamily: 'Varela Round',
    },
  });

 /*  function handleDurationChange(data: any) {
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
  } */

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CustomStyledContainer>
          <CssBaseline />
          <Router>
            <ScrollToTop />
            <AudioSwipeAppBar />
            <Routes>
              <Route element={<LandingPage />} path="/" />
              <Route element={<SignupArtistPage />} path="signup/artist" />
            </Routes>
          </Router>
        </CustomStyledContainer >
      </ThemeProvider>
    </LocalizationProvider>
  );
}

function useDatalayer() {
  const { isDarkMode } = useIsDarkMode();
  return {
    isDarkMode,
  }
}

export default App;