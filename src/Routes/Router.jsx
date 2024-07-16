import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
import Secret from '../PrivateRoutes/Secret';

import Dashboard from '../Dashboard/Dashboard';
import Cart from '../Cart/Cart';
import AllUsers from '../Dashboard/AllUsers';
import PrivateRoute from './../PrivateRoutes/PrivateRouter';
import AdminRoute from '../PrivateRoutes/AdminRoute';
import AddItems from '../Add & Update/AddItems'
import UpdateItems from '../Add & Update/UpdateItems';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'order/:category', element: <Order /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'secret', element: <PrivateRoute><Secret /></PrivateRoute>},
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
          { path: 'cart', element: <Cart /> },
          { path: 'users', element: <AdminRoute><AllUsers /></AdminRoute> },
          { path: 'addItems', element: <AddItems />} ,// Ensure this path is correct
          { path: 'updateItems', element: <UpdateItems></UpdateItems>} // Ensure this path is correct
        ]
      }
    ]
  }
]);
