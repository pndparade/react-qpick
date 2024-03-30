import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import Catalog from './routes/Catalog'
import Cart from './routes/Cart'
import Favourite from './routes/Favourite'
import ErrorPage from './routes/ErrorPage'

import './index.sass'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Catalog />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/favourite',
        element: <Favourite />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
