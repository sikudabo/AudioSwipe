// @mui
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { shortenNumber } from '../../../utils/helpers';
// components
import Iconify from '../../../components/artistDashboard/components/Iconify';
import Scrollbar from '../../../components/scrollbar/Scrollbar';

// ----------------------------------------------------------------------


type DashboardSongRankingListProps = {
    title?: string;
    subheader?: string;
    list: Array<any>;
};

export default function DashboardSongRankingList({ title, subheader, list }: DashboardSongRankingListProps) {
  return (
    <Card elevation={5}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------


type SongItemType = {
    song: {
        description: string;
        albumCover: string;
        votes: number | string;
        title: string;
    };
};

function SongItem({ song }: SongItemType) {

  const { albumCover, description, title, votes } = song;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box component="img" alt={title} src={albumCover} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        Votes  {votes}
      </Typography>
    </Stack>
  );
}
