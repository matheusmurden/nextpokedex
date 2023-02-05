import axios from 'axios'
import { VercelRequest, VercelResponse } from '@vercel/node';

const PokemonLoader = (_req: VercelRequest, res: VercelResponse) => {
    const params = _req?.query;
    if (!Number(params?.id)) {
        res.status(404).json({ error: 'Invalid DEX Nº.' });
    }

    return axios.get(`https://pokeapi.co/api/v2/pokemon/${params?.id}`).then(({ data }) => res.status(200).json(data));
};

export default PokemonLoader
