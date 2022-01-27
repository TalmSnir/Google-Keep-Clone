import { IconButton, Tooltip } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
export default function NewNoteActions() {
  return (
    <div>
      <Tooltip title='new list'>
        <IconButton aria-label='new list'>
          <CheckBoxOutlinedIcon fontSize='sm' />
        </IconButton>
      </Tooltip>
      <Tooltip title='new note with drawing'>
        <IconButton aria-label='new note with drawing'>
          <BrushOutlinedIcon fontSize='sm' />
        </IconButton>
      </Tooltip>
      <Tooltip title='new note with image'>
        <IconButton aria-label='new note with image'>
          <ImageOutlinedIcon fontSize='sm' />
        </IconButton>
      </Tooltip>
    </div>
  );
}
