/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const HortaCard = lazyLoad(
  () => import('./index'),
  module => module.Hortas,
);

export const HortaPage = lazyLoad(
  () => import('./index'),
  module => module.HortaPage,
);
