import { MainLayout } from 'layouts'
import { HomeLoader, PokemonLoader } from 'loaders';
import { HomePage, PokemonPage } from 'pages';


const routes = [
    {
        id: 'home',
        path: '/',
        element: (
            <MainLayout>
<HomePage />;

            </MainLayout>
        ),
        loader: HomeLoader,
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