import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';

// components
import { ArtistDashboardHeader } from './header';
import Nav from './nav/Nav';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: 0,
  paddingBottom: 0,
  [theme.breakpoints.up('lg')]: {
    paddingTop:  0,
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

// ----------------------------------------------------------------------

export default function ArtistDashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <ArtistDashboardHeader onOpenNav={() => setOpen(true)} />

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
