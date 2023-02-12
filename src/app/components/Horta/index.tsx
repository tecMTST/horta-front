import * as React from 'react';
import { Card, Typography } from '@mui/material';
import { Horta } from 'types/Horta';
import { useQuery } from '@tanstack/react-query';
import { getHortas } from 'api/client';
import { Usuario } from 'types/Usuario';
import { useUser } from 'services/Authentication';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
interface HortaProps {
  horta: Horta;
}
export function HortaCard(props: HortaProps) {
  const { horta } = props;
  return (
    <Card sx={{ maxWidth: 345 }} id={`horta-${Math.random()}`}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: '#1d991d' }}>{horta.nome[0]}</Avatar>}
        title={horta.nome}
      />
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          Endereço: {horta.endereco}
        </Typography>
        <Typography variant="body1">{horta.descricao}</Typography>
        <Typography variant="h6">
          Total de Canteiros: {horta.canteiros.length}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function useHortas() {
  const { data } = useUser();
  const user = data as Usuario;
  return useQuery({
    queryKey: ['hortas-usuario'],
    queryFn: () => getHortas(user.token),
    onError: () => {
      console.log('error');
    },
  });
}
