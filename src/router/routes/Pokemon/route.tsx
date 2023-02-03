import { MainLayout } from 'layouts';

import { loader as pokemonLoader } from './loader';
import { PokemonPage } from './page';

export const PokemonRoute = {
  id: 'pokemon',
  path: '/pokemon/:id',
  element: (
    <MainLayout>
      <PokemonPage />
    </MainLayout>
  ),
  loader: pokemonLoader,
};
