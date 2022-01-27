import React, { useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton, Menu, MenuItem } from '@mui/material';

const settingList = [
  'settings',
  'enable dark theme',
  'send feedback',
  'help',
  'app downloads',
  'keyboard shortcuts',
];
export default function SettingsAction() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = e => {
    isOpen ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <>
      <IconButton
        size='large'
        aria-label='settings-button'
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}>
        <SettingsOutlinedIcon size='lg' />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id={'settings menu'}
        keepMounted
        MenuListProps={{
          'aria-labelledby': 'settings-button',
        }}
        open={isOpen}
        onClose={handleClick}>
        {settingList.map(setting => (
          <MenuItem
            key={setting}
            onClick={handleClick}
            sx={{ '&:hover': { backgroundColor: 'whitesmoke' } }}>
            {setting}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
