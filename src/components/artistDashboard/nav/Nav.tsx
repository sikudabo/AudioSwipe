import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// hooks
import useResponsive from '../../useResponsive';
// components
import Scrollbar from '../../scrollbar/Scrollbar';
import NavSection from '../../DashboardNavSection';
//
import navConfig from '../../configs/dashboardNavConfig';
import { colors } from '../../colors';
import { useUserData } from '../../../hooks';

const CeCePhoto = require('../../../album-cover-media/cece.jpeg');

// ----------------------------------------------------------------------

const account = {
    displayName: "CeCe Winans",
    email: 'demo@minimals.cc',
    photoURL: '/assets/images/avatars/avatar_default.jpg',
    role: "CeCe",
};


const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
  fontWeight: 900,
}));

// ----------------------------------------------------------------------

type NavProps = {
  onCloseNav: any;
  openNav: any;
}

type NavDisplayLayerProps = NavProps & {
  artist: any;
};

export default function Nav({
  onCloseNav,
  openNav,
}: NavProps) {
  return <Nav_DisplayLayer onCloseNav={onCloseNav} openNav={openNav} {...useDataLayer()} />; 
}

function Nav_DisplayLayer({ artist, openNav, onCloseNav }: NavDisplayLayerProps) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={`http://localhost:2000/api/get-photo/${artist.avatar}`} sx={{ height: 50, width: 50 }} alt={artist.artistName} variant="circular" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary', fontWeight: 900, }}>
                {artist.firstName} {artist.lastName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 900 }}>
                {artist.artistName}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

function useDataLayer() {
  const { artist } = useUserData();

  return {
    artist,
  };
}
