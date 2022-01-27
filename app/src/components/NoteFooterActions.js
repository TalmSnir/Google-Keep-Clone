import React from 'react';

import RemindAction from './actions/RemindAction';
import MoreAction from './actions/MoreAction';
import ArchiveAction from './actions/ArchiveAction';
import AddCollaboratorAction from './actions/AddCollaboratorAction';
import BackgroundOptionsAction from './actions/BackgroundOptionsAction';
import AddImageAction from './actions/AddImageAction';

export default function NoteFooterActions() {
  return (
    <>
      <RemindAction />
      <AddCollaboratorAction />
      <BackgroundOptionsAction />
      <AddImageAction />
      <ArchiveAction />
      <MoreAction />
    </>
  );
}
