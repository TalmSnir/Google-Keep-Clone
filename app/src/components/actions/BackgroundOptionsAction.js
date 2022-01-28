import React, { useState } from 'react';

import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import { setBackgroundColor } from '../../stateManagement/NoteState';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
const colors = [
  '',
  'red',
  'cyan',
  'yellow',
  'cornflowerblue',
  'magenta',
  'orange',
];
export default function BackgroundOptionsAction() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const noteBgColor = useSelector(state => state.note.bgColor);
  const dispatch = useDispatch();

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
        <ColorLensOutlinedIcon fontSize='small' />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClick}
        MenuListProps={{
          'aria-labelledby': 'more-actions-button',
        }}
        sx={{
          '& .MuiList-root': {
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            padding: 1,
          },
        }}>
        {colors.map((color, id) => (
          <MenuItem key={color} sx={{ padding: 0 }}>
            <Tooltip title={color}>
              <IconButton
                onClick={() => dispatch(setBackgroundColor(color))}
                sx={{
                  position: 'relative',
                  borderRadius: '50%',
                  backgroundColor: `${color}`,
                  border: `1.5px solid ${
                    noteBgColor === color ? '#A142F4' : color
                  }`,
                  p: '0.25rem',
                  '&:hover': {
                    borderColor: 'black',
                    backgroundColor: `${color}`,
                  },
                }}>
                <FormatColorResetOutlinedIcon
                  fontSize='small'
                  sx={{ visibility: id === 0 ? 'visible' : 'hidden' }}
                />
              </IconButton>
            </Tooltip>
            {noteBgColor === color ? (
              <span
                style={{
                  backgroundColor: '#A142F4',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  transform: 'translate(30%,-30%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CheckIcon
                  sx={{
                    color: 'white',
                    fontSize: '0.9em',
                    p: 0.25,
                  }}
                />
              </span>
            ) : null}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
