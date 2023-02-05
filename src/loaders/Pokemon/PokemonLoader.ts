import axios from 'axios'
import { LoaderFunctionArgs } from 'react-router-dom'
import { getIdFromURL } from 'utils';

const recursiveGetEvolutionsId = (chain: any): any[] => {
  const finalChain = chain?.evolves_to?.map((pkmn: any) => {
    return {
      name: pkmn?.species?.name,
      id: getIdFromURL(pkmn?.species?.url),
      evolutions: recursiveGetEvolutionsId(pkmn),
    };
  });

  finalChain.forEach((i: any) => finalChain.push(i?.evolutions));

  return finalChain?.flat();
};


export const PokemonLoader = async ({ params }: LoaderFunctionArgs) => {

    const initialPkmn = await axios.get('/api/getPokemonById', { params })?.then(({ data }) => data);

    const species = await axios.get('/api/getSpeciesById', { params: { id: getIdFromURL(initialPkmn?.species?.url) } })?.then(({ data }) => data);

    const evolutionChain = await axios.get('/api/getEvolutionChainById', { params: { id: getIdFromURL(species?.evolution_chain?.url) } })?.then(({ data }) => data);

    let evolutions = recursiveGetEvolutionsId(evolutionChain?.chain)

    if(species?.evolves_from_species) {
        evolutions?.push({
            name: species?.evolves_from_species?.name,
            id: getIdFromURL(species?.evolves_from_species?.url)
        })
    }

    evolutions = evolutions?.sort((a, b) => (Number(a?.id) < Number(b?.id) ? -1 : 1));

    return ({ pokemon: { ...initialPkmn, ...species, ...evolutionChain, evolutions } })
}