import React, { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
export default function RefreshAction() {
  const [isRefresh, setIsRefresh] = useState(false);
  const handleRefresh = () => {
    setIsRefresh(true);
  };
  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => setIsRefresh(false), 1500);
    }
  }, [isRefresh]);

  return (
    <LoadingButton
      loadingPosition='center'
      onClick={handleRefresh}
      loading={isRefresh}
      startIcon={
        <RefreshOutlinedIcon size='lg' aria-label='refresh' color='dark' />
      }
    />
  );
}
