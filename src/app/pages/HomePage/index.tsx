import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import { HortaCard, useHortas } from 'app/components/Horta';
import { LogoutButton } from 'app/components/Logout';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useUser } from 'services/Authentication';
import { Usuario } from 'types/Usuario';

export function HomePage() {
  const { data: usuario } = useUser();
  const { data: hortas, isFetching } = useHortas();
  return (
    <>
      <Helmet>
        <title>NT - Horta Automatizada</title>
        <meta name="description" content="NT - Horta Automatizada" />
      </Helmet>
      <span>Olá {(usuario as Usuario).name}</span>
      <LogoutButton />
      <Box>
        {isFetching ? (
          <CircularProgress />
        ) : (
          hortas?.map(horta => <HortaCard horta={horta} />)
        )}
      </Box>
    </>
  );
}
