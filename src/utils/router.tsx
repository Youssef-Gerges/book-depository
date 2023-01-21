import { createBrowserRouter } from 'react-router-dom';
import AuthPage from '@pages/AuthPage';
import App from 'src/App';
import NotFoundPage from '@pages/NotFoundPage';
import HomePage from '@pages/HomePage';
import CartPage from '@pages/CartPage';
import NewReleasesPage from '@pages/NewReleasesPage';
import AuthorBooksPage from '@pages/AuthorBooksPage';
import SingleBookPage from '@pages/SingleBookPage';
import CategoryBooksPage from '@pages/CategoryBooksPage';
import ShopPage from '@pages/ShopPage';
import ReadingListBooksPage from '@pages/ReadingListBooksPage';
import HelpPage from '@pages/HelpPage';
import WishlistPage from '@pages/WishlistPage';
import AccountPage from '@pages/AccountPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
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
      {
        path: '/new-releases',
        element: <NewReleasesPage />,
      },
      {
        path: '/authors/:id',
        element: <AuthorBooksPage />,
      },
      {
        path: '/books/:id',
        element: <SingleBookPage />,
      },
      {
        path: '/categories/:id',
        element: <CategoryBooksPage />,
      },
      {
        path: '/reading-lists/:id',
        element: <ReadingListBooksPage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
      {
        path: '/help',
        element: <HelpPage />,
      },
      {
        path: '/wishlist',
        element: <WishlistPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
    ],
  },
]);

export default router;
