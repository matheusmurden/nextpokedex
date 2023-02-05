import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const RootLoader = (_req: VercelRequest, res: VercelResponse) => {
    return axios
        .get('https://pokeapi.co/api/v2/pokemon/?limit=1')
        .then((response) => {
            return axios.get('https://pokeapi.co/api/v2/pokemon/', {
                params: {
                    limit: response?.data?.count,
                },
            });
        })
        .then(({ data }) => res.status(200).json(data));
    };

export default RootLoader