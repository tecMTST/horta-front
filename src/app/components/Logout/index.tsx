import * as React from 'react';

import { useLogout } from 'services/Authentication';
import { Botao } from '../BotaoNT';

export function LogoutButton() {
  const logout = useLogout();
  return (
    <Botao
      onClick={e => {
        e.preventDefault();
        logout.mutate({});
      }}
      variant={'outlined'}
      size={'small'}
    >
      Sair
    </Botao>
  );
}
