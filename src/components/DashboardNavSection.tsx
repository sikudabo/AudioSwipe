import { ReactElement } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Button, Box, List, ListItemText } from '@mui/material';
import { StyledNavItem, StyledNavItemIcon } from './navStyles';

export type NavSectionProps = {
  data: {
    icon: ReactElement;
    path: string;
    title: string;
  }[];
  other?: any;
};

export default function NavSection({ data = [], ...other }: NavSectionProps) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item: any) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

function NavItem({ item }: any) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      to={path}
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
