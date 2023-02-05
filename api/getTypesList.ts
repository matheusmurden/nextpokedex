import { VercelRequest, VercelResponse } from '@vercel/node';
import { PokemonClient } from 'pokenode-ts';

const getTypesList = (_req: VercelRequest, res: VercelResponse) => {
  const api = new PokemonClient();
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  return api
    .listTypes(0, 1)
    .then((response) => {
      return api.listTypes(0, response?.count);
    })
    .then((data) => res.status(200).json(data));
};

export default getTypesList;
