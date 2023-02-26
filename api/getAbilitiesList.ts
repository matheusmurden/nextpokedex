import { VercelRequest, VercelResponse } from '@vercel/node';
import { NamedAPIResourceList, PokemonClient } from 'pokenode-ts';

const getAbilitiesList = (_req: VercelRequest, res: VercelResponse) => {
  const api = new PokemonClient();
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  return api
    .listAbilities(0, 1)
    .then((response) => {
      return api.listAbilities(0, response?.count);
    })
    .then((data) => res.status(200).json(data)) as Promise<NamedAPIResourceList>;
};

export default getAbilitiesList;
