// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { shortenNumber } from '../../../utils/helpers';
// components
import Iconify from '../../artistDashboard/components/Iconify';
import { colors } from '../../colors';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

export default function SummaryCard({ bgColor = colors.primary, title, total, icon, color = 'primary', sx, ...other }: any) {
    console.log('Other is:', sx);
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: colors.white,
        backgroundColor: bgColor,
      }}
    >
      <StyledIcon
        sx={{
          color: colors.white,
          backgroundImage: (theme: any) =>
            `linear-gradient(135deg, ${colors.white} 0%, ${bgColor} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>

      <Typography variant="h3" style={{ fontWeight: 900 }}>{shortenNumber(total)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72, fontWeight: 900 }}>
        {title}
      </Typography>
    </Card>
  );
}
