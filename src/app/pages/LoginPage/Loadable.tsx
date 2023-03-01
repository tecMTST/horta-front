/**
 * Asynchronously loads the component for Login
 */

import { lazyLoad } from 'utils/loadable';

export const LoginPage = lazyLoad(
  () => import('./index'),
  module => module.LoginPage,
);
