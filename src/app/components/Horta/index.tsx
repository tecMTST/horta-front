import * as React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { Horta } from 'types/Horta';
import { BackendEntities, GetEntity, ListEntity } from 'api/utils';
import { CardHorta } from './CardHorta';

export function Hortas() {
  const { data: hortas, isFetching, isLoading, error } = useHortas();
  if (error) {
    return <Box>error {JSON.stringify(error)}</Box>;
  }
  if (isFetching || isLoading) {
    return <CircularProgress />;
  }

  return hortas && hortas.length > 0 ? (
    <Box>
      {hortas.map(horta => (
        <CardHorta horta={horta} />
      ))}
    </Box>
  ) : (
    <CardHorta
      horta={{ name: 'Nenhuma horta cadastrada', id: 1, address: '', lots: [] }}
    />
  );
}

export function HortaPage() {
  let { id } = useParams();
  const { isFetching, isLoading, error, data } = useHorta(id);
  if (isFetching || isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Box>error {JSON.stringify(error)}</Box>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export function useHorta(id?: string) {
  return useQuery<Horta>({
    queryKey: [GetEntity(BackendEntities.HORTA, id)],
    onError: () => {
      console.log('error');
    },
  });
}

export function useHortas() {
  return useQuery<Array<Horta>>({
    queryKey: [ListEntity(BackendEntities.HORTA)],
    onError: () => {
      console.log('error');
    },
  });
}
