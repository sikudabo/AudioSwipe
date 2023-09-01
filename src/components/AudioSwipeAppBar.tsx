import React, { useEffect, useMemo, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadsetIcon from '@mui/icons-material/Headset';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { 
    AppBar, 
    Box, 
    Collapse,
    Drawer, 
    Hidden,
    IconButton, 
    List,
    ListItem, 
    ListItemButton, 
    ListItemIcon,
    ListItemText, 
    Menu, 
    MenuItem,
    Toolbar, 
    Typography, 
} from '@mui/material';
import { colors } from './colors';
import { AudioSwipeAppLogo } from './Icons';

const CustomAppBarStyles = ({ isHidden }: { isHidden: boolean }) => {
    return css`
        display: ${isHidden ? 'none' : 'block'};
    `;
}

const CoolAudioSwipeCursive = styled(Typography)`
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
`;

const StyledLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
`;

const StyledAudioSwitchAppBar = styled(AppBar)<{
    isHidden: boolean;
}>`
    background-color: ${colors.secondary};
    margin-bottom: 20px;
    width: 100vw;
    ${CustomAppBarStyles};

    a {
        color: ${colors.white};
        text-decoration: none;
    }

    .link {
        text-decoration: none;
    }

    .boldened-link-text {
        color: ${colors.white};
        font-weight: 700;
    }

    .logo-container {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding: 0;
    }

    .nav-section {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-left: auto;
        padding-right: 10px;
    }

    .nav-section button:not(first-child) {
        margin-left: 20px;
    }

    .css-iur3w5-MuiPaper-root-MuiDrawer-paper {
        background-color: ${colors.primary};
    }

    .drawer-box  {
        background-color: ${colors.primary};
        color: ${colors.white};
        display: none;
        width: 200px;
    }
`;

export default function AudioSwipeAppBar() {

    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
    let isMenuAnchorElOpen: boolean = Boolean(menuAnchorEl);
    const [listenersMenuAnchorEl, setListenersMenuAnchorEl] = useState<null | HTMLElement>(null);
    let islistenersMenuAnchorElOpen: boolean = Boolean(listenersMenuAnchorEl);
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [artistListItemIsOpen, setArtistListItemIsOpen] = useState(false);
    const [listenersListItemIsOpen, setListenersListItemIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();

    useMemo(() => {
        setDrawerIsOpen(false);
        setMenuAnchorEl(null);
        setListenersMenuAnchorEl(null);

    }, [pathname]);

    useEffect(() => {
        if (pathname.includes('artist/dashboard')) {
            setIsHidden(true);
            return;
        } 
        setIsHidden(false);

    }, [pathname]);

    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    function handleNavigationDropdownClick(event: React.MouseEvent<HTMLElement>) {
        setMenuAnchorEl(event.target as any);
    }
    
    function handleListenersNavigationDropdownClick(event: React.MouseEvent<HTMLElement>) {
        setListenersMenuAnchorEl(event.target as any);
    }

    function handleNavigationMenuClose() {
        setMenuAnchorEl(null);
    }

    function handleListenersNavigationMenuClose() {
        setListenersMenuAnchorEl(null);
    }

    function toggleDrawer() {
        setDrawerIsOpen(!drawerIsOpen);
        if (!drawerIsOpen) {
            setArtistListItemIsOpen(false);
            setListenersListItemIsOpen(false);
        }
    }
    return (
        <StyledAudioSwitchAppBar color="secondary" isHidden={isHidden}>
            <Toolbar>
                <ThemeProvider theme={theme}>
                    <Hidden mdUp>
                        <IconButton
                            aria-label="Audio Swipe App Bar Menu Button"
                            color="inherit"
                            edge="start"
                            onClick={toggleDrawer}
                            size="large"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            aria-label="Audio Swipe Mobile Navigation Drawer"
                            open={drawerIsOpen}
                            onClose={toggleDrawer}
                        >
                            <Box 
                                role="presentation"
                                sx={{ backgroundColor: colors.secondary, opacity: 0.5, width: '55vw' }}
                            >
                                <List  sx={{
                                    backgroundColor: 'rgb(0, 119, 139, 0.9)',
                                    color: colors.white,
                                    width: '50vw',
                                    height: '100vh',
                                    overflow: 'scroll',
                                }}>
                                    <ListItem>
                                        <ListItemButton onClick={() => setArtistListItemIsOpen(!artistListItemIsOpen)}>
                                            <ListItemText primary="Artists" style={{ color: colors.white }} />
                                            {artistListItemIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                        </ListItemButton>
                                    </ListItem>
                                    <Collapse in={artistListItemIsOpen} timeout="auto" unmountOnExit>
                                            <List component="div">
                                                <ListItem onClick={() => navigate('discovered')}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <SearchIcon />
                                                        </ListItemIcon>
                                                        <p style={{ fontSize: 12, fontWeight: 700, marginLeft: "-2px" }}>Get Discovered</p>
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem onClick={() => navigate('login/artist')}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <LoginIcon />
                                                        </ListItemIcon>
                                                        <p style={{ fontSize: 12, fontWeight: 700, marginLeft: "-2px" }}>Login</p>
                                                    </ListItemButton>
                                                </ListItem>
                                                   <ListItem onClick={() => navigate('signup/artist')}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <HeadsetIcon />
                                                        </ListItemIcon>
                                                        <p style={{ fontSize: 12, fontWeight: 700, marginLeft: "-2px" }}>Sign Up</p>
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                    </Collapse>
                                    <ListItem>
                                        <ListItemButton onClick={() => setListenersListItemIsOpen(!listenersListItemIsOpen)}>
                                            <ListItemText primary="Listeners" />
                                            {listenersListItemIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                        </ListItemButton>
                                    </ListItem>
                                    <Collapse in={listenersListItemIsOpen} timeout="auto" unmountOnExit>
                                            <List component="div">
                                                <ListItem onClick={() => navigate('discover')}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <SearchIcon />
                                                        </ListItemIcon>
                                                        <p style={{ fontSize: 12, fontWeight: 700, marginLeft: "-2px" }}>Discover</p>
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem onClick={() => navigate('listeners')}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <LoginIcon />
                                                        </ListItemIcon>
                                                        <p style={{ fontSize: 12, fontWeight: 700, marginLeft: "-2px" }}>Login</p>
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem onClick={() => navigate('listeners')}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <HeadsetIcon />
                                                        </ListItemIcon>
                                                        <p style={{ fontSize: 12, fontWeight: 700, marginLeft: "-2px" }}>Sign Up</p>
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                    </Collapse>
                                    <ListItem onClick={() => navigate('about')}>
                                        <ListItemButton>
                                            <ListItemText primary="About Us" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem onClick={() => navigate('investors')}>
                                        <ListItemButton>
                                            <ListItemText primary="Investors" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemText primary="Partnerships" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </Hidden>
                </ThemeProvider>
                <div className="logo-container" onClick={() => navigate('/')}>
                    <AudioSwipeAppLogo height={40} width={40} />
                    <CoolAudioSwipeCursive>
                        AudioSwipe
                    </CoolAudioSwipeCursive>
                </div>
                <Hidden mdDown>
                    <div className="nav-section">
                        <IconButton
                            aria-label="Audio Swipe Artists Dropdown Button"
                            color="inherit"
                            edge="start"
                            onClick={handleNavigationDropdownClick}
                            size="large"
                            disableRipple
                        >
                            <Typography className="boldened-link-text">
                                Artists 
                            </Typography>
                        </IconButton>
                        <Menu 
                            anchorEl={menuAnchorEl}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            aria-label="Landing Page Artist Navigation Menu"
                            color="seconday"
                            id="artists-navigation-menu"
                            onClose={handleNavigationMenuClose}
                            open={isMenuAnchorElOpen}
                            PaperProps={{
                                elevation: 5,
                                sx: {
                                    backgroundColor: 'rgb(0, 119, 139, 0.9)',
                                    color: '#ffffff',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    fontWeight: 700,
                                    mt: 1.5,
                                    overflow: 'visible',
                                }
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                            <MenuItem onClick={() => navigate('discovered')}>
                              <SearchIcon sx={{ mr: 2 }} />  <p>Get Discovered</p>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('login/artist')}>
                            <LoginIcon sx={{ mr: 2 }} />  <p> Login </p>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('signup/artist')}>
                                <HeadsetIcon sx={{ mr: 2 }} />  <p> Sign Up </p>
                            </MenuItem>
                        </Menu>
                        <IconButton
                            aria-label="Audio Swipe Listeners Dropdown Button"
                            color="inherit"
                            edge="start"
                            onClick={handleListenersNavigationDropdownClick}
                            size="large"
                            disableRipple
                        >
                            <Typography className="boldened-link-text">
                                Listeners
                            </Typography>
                        </IconButton>
                        <Menu 
                            anchorEl={listenersMenuAnchorEl}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            aria-label="Landing Page Artist Navigation Menu"
                            color="seconday"
                            id="artists-navigation-menu"
                            onClose={handleListenersNavigationMenuClose}
                            open={islistenersMenuAnchorElOpen}
                            PaperProps={{
                                elevation: 5,
                                sx: {
                                    backgroundColor: 'rgb(0, 119, 139, 0.9)',
                                    color: '#ffffff',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    fontWeight: 700,
                                    mt: 1.5,
                                    overflow: 'visible',
                                }
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                            <MenuItem onClick={() => navigate('discover')}>
                              <SearchIcon sx={{ mr: 2 }} />  <p>Discover New Music</p>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('listeners')}>
                                <LoginIcon sx={{ mr: 2 }} />  <p> Login </p>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('listeners')}>
                                <HeadsetIcon sx={{ mr: 2 }} />  <p> Sign Up </p>
                            </MenuItem>
                        </Menu>
                        <IconButton
                            aria-label="Audio Swipe About Us Button"
                            color="inherit"
                            edge="start"
                            onClick={() => navigate('about')}
                            size="large"
                            disableRipple
                        >
                            <Typography className="boldened-link-text">
                                About Us
                            </Typography>
                        </IconButton>
                        <IconButton
                            aria-label="Audio Swipe Investors Button"
                            color="inherit"
                            edge="start"
                            onClick={() => navigate('investors')}
                            size="large"
                            disableRipple
                        >
                            <Typography className="boldened-link-text">
                                Investors 
                            </Typography>
                        </IconButton>
                        <IconButton
                            aria-label="Audio Swipe Partnerships Button"
                            color="inherit"
                            edge="start"
                            size="large"
                            disableRipple
                        >
                            <Typography className="boldened-link-text">
                                Partnerships
                            </Typography>
                        </IconButton>
                    </div>
                </Hidden>
            </Toolbar>
        </StyledAudioSwitchAppBar>
    );
}


