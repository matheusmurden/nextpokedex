import axios from 'axios'
import { LoaderFunctionArgs } from 'react-router-dom'

export const PokemonLoader = ({ params }: LoaderFunctionArgs) => {
    return axios.get('/api/pokemon', { params }).then(({ data }) => ({ pokemon: data }))
}