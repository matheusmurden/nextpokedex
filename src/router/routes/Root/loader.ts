import { api } from 'api';

export const loader = async () => {
  const pokemon = await api
    .get('/pokemon/?limit=1')
    .then((res) => {
      return api.get('/pokemon/', {
        params: {
          limit: res?.data?.count,
        },
      });
    })
    .then((res) => res.data?.results);

  return {
    pokemon,
  };
};
