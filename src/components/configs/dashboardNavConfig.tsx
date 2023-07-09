import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const navConfig = [
  {
    title: 'dashboard',
    path: '/artist/dashboard',
    icon: <GridViewOutlinedIcon />,
  },
  {
    title: 'upload',
    path: '/artist/dashboard/upload',
    icon: <CloudUploadOutlinedIcon />,
  },
  {
    title: 'songs',
    path: '/artist/dashboard/songs',
    icon: <LibraryMusicOutlinedIcon />
  },
  {
    title: 'settings',
    path: '/artist/dashboard/settings',
    icon: <SettingsOutlinedIcon />,
  },
  {
    title: 'logout',
    path: '/artist/dashboard/logout',
    icon: <ExitToAppOutlinedIcon />,
  },
];

export default navConfig;
