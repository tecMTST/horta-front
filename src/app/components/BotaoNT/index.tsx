import { Button, ButtonProps, styled, SvgIcon } from '@mui/material';
import { ReactComponent as FolhaIcon } from '../../../static/media/btn-folha-vermelha.svg';
import * as React from 'react';

export interface BotaoProps extends ButtonProps {
  tipo?: 'vermelho' | 'azul' | undefined;
}

export const Botao = (props: BotaoProps) => {
  switch (props.tipo) {
    case 'azul':
      return (
        <BotaoAzul
          size="small"
          {...props}
          endIcon={<SvgIcon component={FolhaIcon} />}
        ></BotaoAzul>
      );
    case 'vermelho':
      return (
        <BotaoVermelho
          size="small"
          {...props}
          endIcon={<SvgIcon component={FolhaIcon} />}
        ></BotaoVermelho>
      );
    default:
      return <Button size="small" {...props}></Button>;
  }
};

const BotaoVermelho = styled(Button)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderBottom: '5px',
    minWidth: 'fit-content',
    borderColor: theme.palette.primary.dark,
  };
});

const BotaoAzul = styled(Button)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    minWidth: 'fit-content',
  };
});
