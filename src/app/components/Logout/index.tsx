import * as React from 'react';

import { Button } from '@mui/material';
import { useLogout } from 'services/Authentication';

export function LogoutButton() {
  const logout = useLogout();
  return (
    <Button
      onClick={() => {
        logout.mutate(null);
      }}
      variant={'contained'}
      defaultValue={'Logout'}
    >
      Logout
    </Button>
  );
}
