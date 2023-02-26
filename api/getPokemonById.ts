import { VercelRequest, VercelResponse } from '@vercel/node';
import { PokemonClient, Pokemon } from 'pokenode-ts';

const getPokemonById = (_req: VercelRequest, res: VercelResponse) => {
  const api = new PokemonClient();

  const params = _req?.query;
  if (!Number(params?.id)) {
    res.status(404).json({ error: 'Invalid DEX Nº.' });
  }

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  return api.getPokemonById(Number(params.id)).then((data) => res.status(200).json(data)) as Promise<Pokemon>;
};

export default getPokemonById;
