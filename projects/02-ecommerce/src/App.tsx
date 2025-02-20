import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Routes
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound';
import MyAccountPage from './pages/MyAccount';
import MyOrderPage from './pages/MyOrder';
import MyOrdersPage from './pages/MyOrders';
import SignInPage from './pages/SignIn';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/my-account',
      element: <MyAccountPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/my-order',
      element: <MyOrderPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/my-orders',
      element: <MyOrdersPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/sign-in',
      element: <SignInPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/*',
      element: <NotFoundPage />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
