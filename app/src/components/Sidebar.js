import * as React from 'react';
import { styled } from '@mui/material/styles';

import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { Link } from '@mui/material';

let links = [
  { path: 'notes', title: 'notes', icon: NotificationsOutlinedIcon },
  { path: 'reminders', title: 'reminders', icon: LabelOutlinedIcon },
  { path: 'personal', title: 'personal', icon: LabelOutlinedIcon },
  { path: 'work', title: 'work', icon: LabelOutlinedIcon },
  { path: 'shopping', title: 'shopping', icon: LabelOutlinedIcon },
  { path: 'trash', title: 'delete', icon: DeleteOutlineOutlinedIcon },
  { path: 'archive', title: 'archive', icon: ArchiveOutlinedIcon },
];

const drawerWidth = 240;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'relative',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
  '& .MuiPaper-root': { position: 'relative' },
}));

export default function Sidebar({
  showMenu,
  setShowMenu,
  menuIconPressed,
  setMenuIconPressed,
}) {
  let isOpen = useSelector(state => state.menu.isOpen);

  return (
    <Box>
      <Drawer variant='permanent' open={isOpen}>
        <List>
          {links.map(link => (
            <ListItem
              key={link.title}
              sx={{
                '&:hover': { backgroundColor: 'whitesmoke' },
                borderRadius: '0 3rem 3rem 0',
              }}>
              <Link
                component={NavLink}
                to={link.path}
                underline='none'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'inherit',
                }}>
                <ListItemIcon>
                  <link.icon fontSize='medium' color='inherit' />
                </ListItemIcon>
                <ListItemText primary={link.title} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
