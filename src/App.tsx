/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Backdrop from '@mui/material/Backdrop';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import { useIsFormLoading } from './utils/forms';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { useIsDarkMode, useUserData } from './hooks';
import {
  ArtistDashboardLayout,
  AudioSwipeAppBar,
  ScrollToTop,
  colors,
  RouteWatch,
  ToastMessage,
} from './components';
import './BodyStyles.css';
import { 
  ArtistDashboardPage,
  ArtistLoginPage, 
  ArtistSongUploadPage,
  ClipsPage,
  LandingPage, 
  SignupArtistPage 
} from './pages';
import CircularProgress from '@mui/material/CircularProgress';
import { ArtistType } from './typings';

const CustomStyledContainer = styled.div`
  padding: 0;
  font-family: 'Varela Round';
  margin-right: 0px;
  margin-left: 0px;
`;

type AppDisplayLayerProps = {
  artist?: any;
  handleBackdropClose: () => void;
  isDarkMode: boolean;
  isLoading: boolean;
};

function App() {
  return <App_DisplayLayer {...useDatalayer()} />;
}

function App_DisplayLayer({ handleBackdropClose, isDarkMode, isLoading }: AppDisplayLayerProps) {
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
            <Backdrop
              sx={{ color: colors.hotPink, zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isLoading}
              onClick={handleBackdropClose}
            >
              <CircularProgress color="error" />
            </Backdrop>
            <RouteWatch />
            <ScrollToTop />
            <ToastMessage duration={6000} />
            <AudioSwipeAppBar />
            <Routes>
              <Route element={<LandingPage />} path="/" />
              <Route element={<SignupArtistPage />} path="signup/artist" />
              <Route element={<ArtistLoginPage />} path="login/artist" />
              <Route element={<ArtistDashboardLayout />} path="artist/dashboard">
                <Route element={<ArtistDashboardPage />} path="main" />
                <Route element={<ArtistSongUploadPage />} path="upload" />
                <Route element={<ClipsPage />} path="clips" />
              </Route>
            </Routes>
          </Router>
        </CustomStyledContainer >
      </ThemeProvider>
    </LocalizationProvider>
  );
}

function useDatalayer() {
  const { isDarkMode } = useIsDarkMode();
  const { isLoading, setIsLoading } = useIsFormLoading();
  const { artist } = useUserData();
  
  function handleBackdropClose() {
    setIsLoading(true);
  }
  
  return {
    artist,
    handleBackdropClose,
    isDarkMode,
    isLoading,
  }
}

export default App;