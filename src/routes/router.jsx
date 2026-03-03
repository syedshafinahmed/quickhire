import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import FindJobs from "../pages/findjobs/FindJobs";
import Companies from "../pages/companies/Companies";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import PostJob from "../pages/dashboard/PostJob";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/find-jobs',
        Component: FindJobs,
        // loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path: '/browse-companies',
        Component: Companies,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'post-job',
        Component: PostJob
      }
    ]
  }
])