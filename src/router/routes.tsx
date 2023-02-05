import { MainLayout } from 'layouts'
import { RootPage, PokemonPage } from 'pages'
import { RootLoader, PokemonLoader } from 'loaders'

const routes = [
    {
        id: 'root',
        path: '/',
        element: (
            <MainLayout>
                <RootPage />
            </MainLayout>
        ),
        loader: RootLoader,
    },
    {
        id: 'pokemon',
        path: '/pokemon/:id',
        element: (
            <MainLayout>
                <PokemonPage />
            </MainLayout>
        ),
        loader: PokemonLoader,
    }
]

export default routes