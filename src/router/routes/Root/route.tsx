import { MainLayout } from 'layouts';

import { loader as rootLoader } from './loader';
import { RootPage } from './page';

export const RootRoute = {
  id: 'root',
  path: '/',
  element: (
    <MainLayout>
      <RootPage />
    </MainLayout>
  ),
  loader: rootLoader,
};
