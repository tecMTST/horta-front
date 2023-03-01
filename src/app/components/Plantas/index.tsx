import * as React from 'react';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { BackendEntities, ListEntity } from 'api/utils';
import { Planta } from 'types/Planta';

export function Plantas() {
  const { data: plantas, isFetching, isLoading, error } = usePlantas();
  if (error) {
    return <Box>error {JSON.stringify(error)}</Box>;
  }
  if (isFetching || isLoading) {
    return <CircularProgress />;
  }

  return plantas && plantas.length > 0 ? (
    <Box>
      {plantas.map(planta => (
        <div key={planta.id}>${planta.name}</div>
      ))}
    </Box>
  ) : (
    <div>Nenhuma planta cadastrada</div>
  );
}

export function PlantaCount() {
  const { data: plantas, isFetching, isLoading, error } = usePlantas();
  if (error) {
    return <>error {JSON.stringify(error)}</>;
  }
  if (isFetching || isLoading) {
    return <CircularProgress />;
  }
  let label = 'planta';
  if (plantas && plantas?.length > 1) {
    label += 's';
  }
  return (
    <>
      {plantas?.length} {label}.
    </>
  );
}

export function usePlantas() {
  return useQuery<Array<Planta>>({
    queryKey: [ListEntity(BackendEntities.PLANTA)],
    onError: () => {
      console.log('error');
    },
  });
}

export default Plantas;
