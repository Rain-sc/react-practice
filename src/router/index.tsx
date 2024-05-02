import Article from "@/pages/Article";
import Dashboard from "@/pages/Dashboard";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Publish from "@/pages/Publish";
import { createBrowserRouter } from "react-router-dom";
import { links } from "./links";
import Redirect from "@/pages/Dashboard/Redirect";
import RequiredAuth from "./requireAuth";

const router = createBrowserRouter([
  {
    path: links.home,
    element: <Redirect />
  },
  {
    path: links.login,
    element: <Login />,
  },
  {
    element: <RequiredAuth><Layout /></RequiredAuth>,
    children: [
      {
        path: links.dashboard,
        element: <Dashboard />
      },
      {
        path: links.article,
        element: <Article />
      },
      {
        path: links.publish,
        element: <Publish />
      }
    ]
  }
])

export default router;