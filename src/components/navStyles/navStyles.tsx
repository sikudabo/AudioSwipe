import { styled } from '@mui/material/styles';
import { ListItemIcon, ListItemButton } from '@mui/material';
import { colors } from '../colors';

// ----------------------------------------------------------------------

export const StyledNavItem: any = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  fontWeight: 900,
  position: 'relative',
  textTransform: 'capitalize',
  color: colors.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
