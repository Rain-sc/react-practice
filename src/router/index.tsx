import Article from "@/pages/Article";
import Dashboard from "@/pages/Dashboard";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Publish from "@/pages/Publish";
import { createBrowserRouter } from "react-router-dom";
import { links } from "./links";

const router = createBrowserRouter([
  {
    path: links.login,
    element: <Login />,
  },
  // {
  //   path: links.layout,
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: links.dashboard,
  //       element: <Dashboard />
  //     },
  //     {
  //       path: links.article,
  //       element: <Article />
  //     },
  //     {
  //       path: links.publish,
  //       element: <Publish />
  //     }
  //   ]
  // }
])

export default router;