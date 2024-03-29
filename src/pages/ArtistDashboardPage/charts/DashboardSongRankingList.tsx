// @mui
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { shortenNumber } from '../../../utils/helpers';
// components
import Iconify from '../../../components/artistDashboard/components/Iconify';
import Scrollbar from '../../../components/scrollbar/Scrollbar';
import { SongDataType } from '../../ClipsPage/typings/songTableRowType';
const CeCeCover = require('../../../album-cover-media/cece.jpeg');
const DonnieCover = require('../../../album-cover-media/Donnie McClurkin.jpeg');
const ThePoliceAlbumCover = require('../../../album-cover-media/Police-album-zenyattamondatta.jpeg');
const JonathanNelsonAlbumCover = require('../../../audio-media/jonathan-nelson.jpeg');
const AngelsAlbumCover = require('../../../audio-media/angels.jpeg');

// ----------------------------------------------------------------------

const songs = [
    {
        name: "No God Greater!",
        albumCover: CeCeCover,
        album: "So Good To Us",
        votes: 30,
        id: 1,
    },
    {
        name: "His mercy",
        albumCover: DonnieCover,
        album: "Grace and mercy",
        votes: 20,
        id: 2,
    },
    {
        name: "Man in a suitcase",
        albumCover: ThePoliceAlbumCover,
        album: "Going home",
        votes: 15,
        id: 3,
    },
    {
        name: "His warriors",
        albumCover: JonathanNelsonAlbumCover,
        album: "Fighting for Christ",
        votes: 13,
        id: 4,
    },
    {
        name: "Thank God for angels",
        albumCover: AngelsAlbumCover,
        album: "Angels above",
        votes: 5,
        id: 5,
    },
];


type DashboardSongRankingListProps = {
    title?: string;
    subheader?: string;
    list: Array<any>;
};

export default function DashboardSongRankingList({ title, subheader, list }: DashboardSongRankingListProps) {

  let sortedList = [];

  if (list) {
    sortedList = list.sort((a, b) => {
      if (a.likes.length > b.likes.length) {
        return -1;
      }

      if (a.likes.length < b.likes.length) {
        return 1;
      }

      return 0;
    })
  }

  return (
    <Card elevation={5} style={{ maxHeight: 375, overflow: 'scroll' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, paddingLeft: 20 }}>
            <p style={{ fontSize: 28, fontWeight: 900, marginBottom: 1, }}>
            {title}
            </p>
            <p>
            {subheader}
            </p>
        </div>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {typeof list !== 'undefined' && (
            <div style={{ paddingBottom: 10 }}>
              {sortedList.map((song: SongDataType) => (
                <SongItem key={song._id} song={song} />
              ))}
            </div>
          )}
        </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------


type SongItemType = {
    song: SongDataType;
};

function SongItem({ song }: SongItemType) {

  const { album, albumCover, likes, name } = song;

  return (
    <Stack direction="row" alignItems="center" spacing={2} style={{ marginBottom: 20 }}>
      <Box component="img" alt={name} src={`${process.env.REACT_APP_BASE_URI}api/get-photo/${albumCover}`} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {album}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {name}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {typeof song !== 'undefined' && typeof song.likes !== 'undefined' ? song.likes.length : 0} likes
      </Typography>
    </Stack>
  );
}
