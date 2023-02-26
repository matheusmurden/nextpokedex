import axios from 'axios';
import { Pokemon } from 'pokenode-ts';

export interface HomeLoaderDTO {
  pokemonArray: Pokemon[]
}

export const HomeLoader = (): Promise<HomeLoaderDTO> => {
  return axios.get('/api/getPokemonList').then(({ data }) => ({ pokemonArray: data?.results } as HomeLoaderDTO));
};
