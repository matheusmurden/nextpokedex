import { VercelRequest, VercelResponse } from '@vercel/node';
import { PokemonClient } from 'pokenode-ts';

const getGrowthRateById = (_req: VercelRequest, res: VercelResponse) => {
  const api = new PokemonClient();

  const params = _req?.query;
  if (!Number(params?.id)) {
    res.status(404).json({ error: 'Invalid Growth Rate ID' });
  }

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  return api.getGrowthRateById(Number(params.id)).then((data) => res.status(200).json(data));
};

export default getGrowthRateById;
