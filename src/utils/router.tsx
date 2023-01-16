import { createBrowserRouter } from 'react-router-dom';
import AuthPage from '@pages/AuthPage';
import App from 'src/App';
import NotFoundPage from '@pages/NotFoundPage';
import HomePage from '@pages/HomePage';
import CartPage from '@pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
