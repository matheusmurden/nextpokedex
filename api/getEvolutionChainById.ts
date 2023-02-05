import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const getEvolutionChainById = (_req: VercelRequest, res: VercelResponse) => {
  const params = _req?.query;
  if (!Number(params?.id)) {
    res.status(404).json({ error: 'Invalid Evolution Chain ID' });
  }

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  return axios
    .get(`https://pokeapi.co/api/v2/evolution-chain/${Number(params.id)}`)
    .then(({ data }) => res.status(200).json(data));
};

export default getEvolutionChainById;
