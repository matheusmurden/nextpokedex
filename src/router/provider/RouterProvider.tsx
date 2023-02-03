import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom';

import routes from 'router/routes';

const router = createBrowserRouter(routes);

export const RouterProvider = () => <Provider router={router} />;
