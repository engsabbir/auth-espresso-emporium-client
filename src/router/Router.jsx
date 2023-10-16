import { Link, createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import App from "../App";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffeeDetails from "../pages/UpdateCoffeeDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:
      <div className="text-center">
        <h2>404</h2>
        <h2>THis is not found</h2>
        <Link to="/" className="btn">Go to Home</Link>
      </div>,
    children: [
      {
        path: '/',
        element: <App />,
        loader: () => fetch('https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/coffee')
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '/users',
        element: <Users />,
        loader: ()=>fetch('https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/users')
      },
      {
        path: 'add-coffee',
        element: <AddCoffee />
      },
      {
        path: 'update-coffee-details/:id',
        element: <UpdateCoffeeDetails />,
        loader: ({ params }) => fetch(`https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/coffee/${params.id}`)
      }
    ]
  },
]);

export default router;