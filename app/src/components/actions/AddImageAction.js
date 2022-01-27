import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const links = [
  'delete note',
  'add label',
  'add drawing',
  'make a copy',
  'show checkboxes',
  'copy to google docs',
];
export default function AddImageAction() {
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
        <ImageOutlinedIcon fontSize='small' />
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
