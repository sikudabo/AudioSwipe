import { ReactElement, useEffect, useState } from 'react';
import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, Box, List, ListItemText } from '@mui/material';
import { StyledNavItem, StyledNavItemIcon } from './navStyles';
import { useUserData } from '../hooks';

export type NavSectionProps = {
  data: {
    icon: ReactElement;
    path: string;
    title: string;
  }[];
  other?: any;
};

export default function NavSection({ data = [], ...other }: NavSectionProps) {
  const location = useLocation();
  const { pathname } = location;
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (pathname.includes('artist/dashboard') || pathname === 'artist/dashboard') {
      setIsHidden(false);
      return;
    }

    setIsHidden(true);

  }, [pathname]);
  return (
    <div>
      {!isHidden ? (
        <Box {...other}>
        <List disablePadding sx={{ p: 1 }}>
          {data.map((item: any) => (
            <NavItem key={item.title} item={item} />
          ))}
        </List>
      </Box>
      ): <></>}
    </div>
  );
}

function NavItem({ item }: any) {
  const navigate = useNavigate();
  const { title, path, icon, info } = item;
  const { setArtist } = useUserData();
  
  function handleLogout() {
    setArtist({} as any);
    navigate('/');
  }

  return (
    <StyledNavItem
      onClick={title === 'logout' ? handleLogout : () => {}}
      to={title ===  'logout' ? '' : path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
