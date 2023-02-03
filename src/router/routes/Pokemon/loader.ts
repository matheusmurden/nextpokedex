import { api } from 'api';
import { LoaderFunctionArgs } from 'react-router-dom';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!Number(params?.id)) {
    throw new Response('Invalid DEX Nº.', { status: 404 });
  }

  const speciesPromise = api.get(`/pokemon-species/${params?.id}`).then(async ({ data }) => {
    let evolution = {};
    if (data?.evolution_chain?.url) {
      evolution = await api.get(`${data?.evolution_chain?.url}`).then(({ data }) => data);
    }

    console.log(evolution);

    return { ...data, ...evolution };
  });

  const pokemonPromise = api.get(`/pokemon/${params?.id}`).then(({ data }) => data);

  const [pokemonValue, species] = await Promise.all([pokemonPromise, speciesPromise]);

  console.log(species);

  const pokemon = { ...pokemonValue, ...species };

  return {
    pokemon,
  };
};
