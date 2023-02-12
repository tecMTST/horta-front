/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const HortaCard = lazyLoad(
  () => import('./index'),
  module => module.HortaCard,
);
