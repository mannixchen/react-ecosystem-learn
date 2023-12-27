import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage';
import { Persons } from './pages/Persons';
import { App } from './App';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'persons',
        element: <Persons></Persons>,
      },
      {
        path: 'products/:id',
        element: <ProductPage></ProductPage>,
      },
    ],
  },
]);
export function Routes() {
  return <RouterProvider router={router} />;
}
