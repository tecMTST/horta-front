import * as React from 'react';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { BackendEntities, ListEntity } from 'api/utils';
import { Canteiro } from 'types/Canteiro';

export function Canteiros() {
  const { data: canteiros, isFetching, isLoading, error } = useCanteiros();
  if (error) {
    return <>error {JSON.stringify(error)}</>;
  }
  if (isFetching || isLoading) {
    return <CircularProgress />;
  }

  return canteiros && canteiros.length > 0 ? (
    <Box>
      {canteiros.map(lot => (
        <div key={lot.id}>
          ${lot.id} - ${lot.name}
        </div>
      ))}
    </Box>
  ) : (
    <div>Nenhum canteiro cadastrado</div>
  );
}

export function CanteiroCount() {
  const { data: canteiros, isFetching, isLoading, error } = useCanteiros();
  if (error) {
    return <>error {JSON.stringify(error)}</>;
  }
  if (isFetching || isLoading) {
    return <CircularProgress />;
  }

  return <>{canteiros?.length};</>;
}

export function useCanteiros() {
  return useQuery<Array<Canteiro>>({
    queryKey: [ListEntity(BackendEntities.CANTEIRO)],
    onError: () => {
      console.log('error');
    },
  });
}

export default Canteiros;
