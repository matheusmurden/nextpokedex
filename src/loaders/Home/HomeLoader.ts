import axios from 'axios';

export const HomeLoader = () => {
  return axios.get('/api/getPokemonList').then(({ data }) => ({ pokemon: data?.results }));
};
