import { useState } from 'react';
import ProfileImg from '../profileimg.jpg';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Button } from '@mui/material';
import RefreshAction from './actions/RefreshAction';
import ChangeGridViewAction from './actions/ChangeGridViewAction';
import SettingsAction from './actions/SettingsAction';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../stateManagement/MenuState';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: 'relative', zIndex: 0 }}>
      <AppBar
        sx={{
          bgcolor: 'whitesmoke',
          position: 'relative',
          zIndex: 0,
          boxShadow: 0,
        }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={() => dispatch(toggleMenu())}>
            <MenuIcon />
          </IconButton>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            Keep
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <RefreshAction />
            <ChangeGridViewAction />
            <SettingsAction />
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'>
              <AppsOutlinedIcon size='lg' />
            </IconButton>
            <Button>
              <Avatar alt='avatar' src={ProfileImg} />
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

// <svg
// height='40px'
// width='40px'
// clip-rule='evenodd'
// fill-rule='evenodd'
// stroke-linejoin='round'
// stroke-miterlimit='1.41421'
// viewBox='0 0 560 400'
// xmlns='http://www.w3.org/2000/svg'>
// <linearGradient
//   id='a'
//   gradientTransform='matrix(3567.71 3565.73 -3565.73 3567.71 2108.05 2000.36)'
//   gradientUnits='userSpaceOnUse'
//   x1='0'
//   x2='1'
//   y1='0'
//   y2='0'>
//   <stop offset='0' stop-color='#bf360c' stop-opacity='.1' />
//   <stop offset='1' stop-color='#bf360c' stop-opacity='.02' />
// </linearGradient>
// <radialGradient
//   id='b'
//   cx='0'
//   cy='0'
//   gradientTransform='matrix(7685.21 0 0 7680.95 198.984 212.229)'
//   gradientUnits='userSpaceOnUse'
//   r='1'>
//   <stop offset='0' stop-color='#fff' stop-opacity='.1' />
//   <stop offset='1' stop-color='#fff' stop-opacity='0' />
// </radialGradient>
// <g
//   fill-rule='nonzero'
//   transform='matrix(.0409335 0 0 .0409335 145 65.0727)'>
//   <path
//     d='m4686.67 6592.51h-4165.928c-287.249-.84-519.901-233.37-520.742-520.46v-5551.589c.841-287.094 233.493-519.621 520.742-520.461h5554.578c287.25.84 519.9 233.367 520.74 520.461v4163.689l-1128.27 780.69z'
//     fill='#f4b400'
//   />
//   <path
//     d='m2194.06 1496.73c-610.44 609.13-611.23 1597.51-1.77 2207.62l.9.9 323.73 324.42v1174.94l1388.64 1387.9h781.11l1909.39-1908.36v-993.65l-2193.19-2192c-609.46-610.111-1598.38-610.902-2208.81-1.77z'
//     fill='url(#a)'
//   />
//   <path
//     d='m4686.67 6592.51v-1387.9c-.08-287.36 232.94-520.38 520.46-520.46h1388.93z'
//     fill='#3e2723'
//     fill-opacity='.2'
//   />
//   <path
//     d='m4686.67 6592.51v-1387.9c-.08-287.36 232.94-520.38 520.46-520.46h1388.93z'
//     fill='#fada80'
//   />
//   <path
//     d='m5207.13 4684.15c-287.52.08-520.54 233.1-520.46 520.46v43.09c.08-287.37 233.23-520.26 520.74-520.18h1345.25l43.4-43.37h-1388.65c-.09 0-.19 0-.28 0z'
//     fill='#fff'
//     fill-opacity='.2'
//   />
//   <path
//     d='m3298.03 1040.92c-862.69-.1-1562.12 698.78-1562.22 1561.01-.07 557.87 297.7 1073.38 781.11 1352.27v1250.41h347.16v346.98h954.69v-346.98h347.16v-1304.19c717.37-479.02 910.38-1448.57 431.1-2165.55-289.87-433.63-777.22-693.98-1299-693.95zm520.74 3816.72h-954.69v-346.98h954.69zm0-1158.46v464.51h-954.69v-427.21c-627.01-239.4-941.13-941.48-701.61-1568.15 239.53-626.68 941.99-940.63 1569-701.23 627.01 239.39 941.13 941.48 701.6 1568.15-111.63 292.08-331.67 529.89-614.3 663.93z'
//     fill='#3e2723'
//     fill-opacity='.1'
//   />
//   <path
//     d='m3298.03 1040.92c-862.69-.1-1562.12 698.78-1562.22 1561.01-.07 557.87 297.7 1073.38 781.11 1352.27v1250.41h347.16v346.98h954.69v-346.98h347.16v-1304.19c717.37-479.02 910.38-1448.57 431.1-2165.55-289.87-433.63-777.22-693.98-1299-693.95zm520.74 3816.72h-954.69v-346.98h954.69zm0-1158.46v464.51h-954.69v-427.21c-627.01-239.4-941.13-941.48-701.61-1568.15 239.53-626.68 941.99-940.63 1569-701.23 627.01 239.39 941.13 941.48 701.6 1568.15-111.63 292.08-331.67 529.89-614.3 663.93z'
//     fill='#f1f1f1'
//   />
//   <path
//     d='m2864.08 4901.01h954.69v-43.37h-954.69zm0-693.95h954.69v-43.37h-954.69zm0-470.58c-463.97-177.96-772.92-620.18-780.25-1116.82 0 8.67-.86 17.35-.86 26.45.71 503.11 311.16 953.89 781.11 1134.17zm954.69-37.3v43.37c423.65-201.27 693.8-628.04 694.32-1096.87 0-8.67-.43-16.92-.86-25.59-6.85 462.28-275.67 880.6-693.46 1079.09zm-520.74-2658.26c-862.76.07-1562.16 699.09-1562.22 1561.39 0 6.07.43 12.14.43 18.65 13.53-862.09 723.73-1549.99 1586.28-1536.47 843.65 13.22 1524.31 693.7 1537.3 1536.9 0-6.51.44-12.58.44-19.08-.07-862.3-699.47-1561.32-1562.23-1561.39z'
//     fill='#fff'
//     fill-opacity='.4'
//   />
//   <path
//     d='m2516.92 3954.2c-477.44-275.54-774.15-782.26-780.68-1333.24 0 8.24-.43 16.48-.43 24.72-.21 557.81 297.61 1073.27 781.11 1351.9zm347.16 599.84h954.69v-43.38h-954.69zm433.95-3122.77c660.69.73 1199.87 528.64 1214.2 1188.82 0-6.07.86-11.71.86-17.78 0-670.7-544-1214.41-1215.06-1214.41s-1215.06 543.71-1215.06 1214.41c0 5.64.43 11.27.87 16.91 14.69-659.87 553.8-1187.32 1214.19-1187.95zm520.74 3816.71h347.16v-43.37h-347.16zm1041.05-2626.59c-5.78 514.71-265.46 993.37-693.89 1279.03v43.38c434.09-289.43 694.66-776.59 694.32-1298.12 0-8.24-.43-16.05-.43-24.29zm-1995.74 2583.22h-347.16v43.37h347.16zm0 390.35h954.69v-43.37h-954.69z'
//     fill='#bf360c'
//     fill-opacity='.1'
//   />
//   <path
//     d='m6075.32 0h-5554.578c-287.249.84-519.901 233.367-520.742 520.461v43.372c.841-287.094 233.493-519.621 520.742-520.461h5554.578c287.25.84 519.9 233.367 520.74 520.461v-43.372c-.84-287.094-233.49-519.621-520.74-520.461z'
//     fill='#fff'
//     fill-opacity='.2'
//   />
//   <path
//     d='m520.742 6549.14c-287.249-.84-519.901-233.37-520.742-520.46v43.37c.841 287.09 233.493 519.62 520.742 520.46h4165.928l1909.39-1908.36h-43.4l-1865.99 1864.99z'
//     fill='#bf360c'
//     fill-opacity='.1'
//   />
//   <path
//     d='m4686.67 6592.51h-4165.928c-287.249-.84-519.901-233.37-520.742-520.46v-5551.589c.841-287.094 233.493-519.621 520.742-520.461h5554.578c287.25.84 519.9 233.367 520.74 520.461v4163.689z'
//     fill='url(#b)'
//   />
// </g>
// </svg>
