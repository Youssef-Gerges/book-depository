import { createBrowserRouter } from 'react-router-dom';
import AuthPage from '@pages/AuthPage';
import App from 'src/App';
import NotFoundPage from '@pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

export default router;
