import { Container } from '@mui/system';
import { Hortas } from 'app/components/Horta';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export function HomePage() {
  return (
    <Grid container gridAutoRows={2}>
      <h1>Hortas</h1>
      <Conteudo>
        <Hortas />
      </Conteudo>
    </Grid>
  );
}
const Conteudo = styled(Container)`
  display: grid;
  grid-auto-columns: auto;
  justify-content: center;
`;
