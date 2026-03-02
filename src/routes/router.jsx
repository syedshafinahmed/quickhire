import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      // {
      //   path: '/find-jobs',
      //   Component: ,
      //   // loader: () => fetch('/serviceCenters.json').then(res => res.json())
      // },
      // {
      //   path: 'browse-companies',
      //   Component: ,
      // }
    ]
  }
])