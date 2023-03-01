import * as React from 'react';
import { Box, Container } from '@mui/material';
import { useUser } from 'services/Authentication';
import CircularProgress from '@mui/material/CircularProgress';
import { LogoutButton } from '../Logout';

export function UserInfo() {
  const { isLoading, isError, error, data } = useUser();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Box>{JSON.stringify(error)}</Box>;
  }

  if (data === null) {
    return <Container sx={{ justifyContent: 'space-evenly' }}></Container>;
  }

  return (
    <Container sx={{ justifyContent: 'space-evenly' }}>
      Olá {data?.email} <LogoutButton />
    </Container>
  );
}
