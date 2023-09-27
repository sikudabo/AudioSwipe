import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
import { useUserData } from '../../../hooks';

// ----------------------------------------------------------------------

const account = {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: '/assets/images/avatars/avatar_default.jpg',
};

const MENU_OPTIONS = [
  {
    label: 'Dashboard',
    icon: 'eva:home-fill',
    link: '/artist/dashboard/main',
  },
  {
    label: 'Upload',
    icon: 'eva:person-fill',
    link: '/artist/dashboard/upload',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    link: '/artist/dashboard/settings',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const { artist, setArtist } = useUserData();
  const navigate = useNavigate();

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    setOpen(null);
    setArtist({} as any);
    navigate('/');
  }

  const handleRouteChange = (route: string) => {
    navigate(route);
    setOpen(null);
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          '&:before': {
            zIndex: 1,
            content: "''",
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            position: 'absolute',
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.3),
          }
        }}
        >
            <Avatar src={`${process.env.REACT_APP_BASE_URI}api/get-photo/${artist.avatar}`} alt="photoURL" />
        </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {artist.artistName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {artist.firstName} {artist.lastName}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleRouteChange(option.link)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
