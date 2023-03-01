import React from 'react';
import { Grid, styled, SvgIcon } from '@mui/material';
import { Rodape } from 'app/components/Rodape';
import { ReactComponent as Logo } from '../../static/media//mtst-nt-cabecalho.svg';
import { UserInfo } from 'app/components/Usuario';

export const Layout = (props: { children: React.ReactElement }) => {
  return (
    <Grid
      container
      direction="column"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      padding={1}
      key="layout"
    >
      <StyledGrid item key="header" display={'inline-flex'} minWidth={'100%'}>
        <UserInfo />
        <SvgIcon
          component={Logo}
          width="112"
          height="102"
          viewBox="0 0 112 102"
        />
      </StyledGrid>
      <Grid item key="main-content" minWidth={'100%'}>
        {props.children}
      </Grid>
      <Grid item key="footer" position={'fixed'} bottom={0} minWidth={'100%'}>
        <Rodape />
      </Grid>
    </Grid>
  );
};

const StyledGrid = styled(Grid)(() => ({
  '& svg': {
    margin: 5,
    'font-size': 52,
  },
}));
