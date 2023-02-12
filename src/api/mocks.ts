import MockAdapter from 'axios-mock-adapter';
import { BackendPaths } from './paths';
import { LoginInput } from 'types/Login';
import { Horta } from 'types/Horta';

export const mockAll = axios => {
  /// backend mock
  let mock = new MockAdapter(axios);

  mock.onGet(BackendPaths.LOGIN).reply(config => {
    var { params } = config;
    const cred = params as LoginInput;
    if (cred.email === 'admin@a.com' && cred.password === '123') {
      return [200, '12312312312', { Authorization: '12312312312' }];
    } else {
      return [401, null];
    }
  });

  mock.onGet(BackendPaths.USER).reply(config => {
    if (config.headers?.Authorization === '12312312312') {
      return [
        200,
        {
          token: '12312312312',
          name: 'Usuario Comum',
          email: 'test@1.com',
        },
        { Authorization: '12312312312' },
      ];
    } else {
      return [401, null, null];
    }
  });

  mock.onGet(BackendPaths.HORTAS).reply(config => {
    if (config.headers?.Authorization === '12312312312') {
      return [
        200,
        [
          {
            descricao: 'horta comunitaria do condo',
            nome: 'condo feliz',
            endereco: 'rua da batatinha',
            canteiros: [{ nome: 'canteiro1', id: 'c1' }],
          },
          {
            descricao: 'horta comunitaria da galera',
            nome: 'bonde feliz',
            endereco: 'avenida mandioca',
            canteiros: [
              { nome: 'canteiro1', id: 'c1' },
              { nome: 'canteiro2', id: 'c2' },
              { nome: 'canteiro3', id: 'c3' },
            ],
          },
        ] as Array<Horta>,
        { Authorization: '12312312312' },
      ];
    } else {
      return [401, null, null];
    }
  });

  return mock;
};
