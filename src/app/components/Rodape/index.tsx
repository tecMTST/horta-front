import * as React from 'react';
import { SvgIcon, Box, styled } from '@mui/material';
import { ReactComponent as LogoEsquerda } from '../../../static/media/mtst-nt-rodape.svg';
import { ReactComponent as LogoCentro } from '../../../static/media/mtst-logo-branco.svg';
import { ReactComponent as LogoDireita } from '../../../static/media/mtst-horta.svg';

export const Rodape = () => {
  return (
    <StyledIcon justifyContent={'center'} display={'flex'}>
      <SvgIcon component={LogoEsquerda} inheritViewBox={true} />
      <SvgIcon component={LogoCentro} inheritViewBox={true} />
      <SvgIcon component={LogoDireita} inheritViewBox={true} />
    </StyledIcon>
  );
};

const StyledIcon = styled(Box)(() => ({
  '& svg': {
    margin: 5,
    'font-size': 52,
  },
}));
