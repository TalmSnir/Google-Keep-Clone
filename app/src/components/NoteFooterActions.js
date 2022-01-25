import React from 'react';

import RemindAction from './RemindAction';
import MoreAction from './MoreAction';
import ArchiveAction from './ArchiveAction';
import AddCollaboratorAction from './AddCollaboratorAction';
import BackgroundOptionsAction from './BackgroundOptionsAction';
import AddImageAction from './AddImageActions';
import clsx from 'clsx';

export default function NoteFooterActions({ className }) {
  let classNames = clsx('flex justify-between items-center ', className);
  return (
    <div className={classNames}>
      <RemindAction />
      <AddCollaboratorAction />
      <BackgroundOptionsAction />
      <AddImageAction />
      <ArchiveAction />
      <MoreAction />
    </div>
  );
}
