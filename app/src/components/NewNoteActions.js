import { CheckCircleIcon } from '@heroicons/react/outline';
import IconButton from './IconButton';

export default function NewNoteActions() {
  return (
    <div>
      <IconButton tooltip='new list' icon={CheckCircleIcon} />
      <IconButton tooltip='new note with drawing' icon={CheckCircleIcon} />
      <IconButton tooltip='new note with image' icon={CheckCircleIcon} />
    </div>
  );
}
