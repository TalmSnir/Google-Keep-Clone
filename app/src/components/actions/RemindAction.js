import React, { useState } from 'react';

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import { IconButton, Menu, MenuItem } from '@mui/material';
const links = [
  'later today',
  'tomorrow',
  'next week',
  'pick date & time',
  'pick place',
];

export default function RemindAction() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = e => {
    isOpen ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <IconButton
        id='more-actions-button'
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}>
        <AddAlertOutlinedIcon fontSize='small' />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClick}
        MenuListProps={{
          'aria-labelledby': 'more-actions-button',
        }}>
        {links.map(link => (
          <MenuItem
            key={link}
            onClick={handleClick}
            sx={{ '&:hover': { backgroundColor: 'whitesmoke' } }}>
            {link}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
