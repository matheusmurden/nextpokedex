import axios from 'axios'
import { Pokemon, PokemonSpecies } from 'pokenode-ts';
import { LoaderFunctionArgs } from 'react-router-dom'
import { getIdFromURL } from 'utils';

export interface PokemonLoaderDTO {
  pokemon: Pokemon,
  species: PokemonSpecies
}

export const PokemonLoader = async ({ params }: LoaderFunctionArgs): Promise<PokemonLoaderDTO> => {

    const pokemon = await axios.get('/api/getPokemonById', { params })?.then(({ data }) => data) as Pokemon;

    const species = await axios.get('/api/getSpeciesById', { params: { id: getIdFromURL(pokemon?.species?.url) } })?.then(({ data }) => data) as PokemonSpecies;

    return ({ pokemon, species }) as PokemonLoaderDTO
}