import axios from 'axios'

export const RootLoader = () => {
    return axios.get('/api/root').then(({ data }) => ({ pokemon: data?.results }))
}