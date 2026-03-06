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
import JobDetails from "../pages/dashboard/JobDetails";
import PostedJobs from "../pages/dashboard/PostedJobs";
import EditJob from "../pages/dashboard/EditJob";
import AppliedJobs from "../pages/dashboard/AppliedJobs";
import Applicants from "../pages/dashboard/Applicants";
import DashboardHome from "../pages/dashboard/DashboardHome";

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
      {
        path: "jobs/:_id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`https://quickhire-ssa.vercel.app/jobs/${params._id}`).then(res => res.json())
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'post-job',
        Component: PostJob
      },
      {
        path: 'applied-jobs',
        Component: AppliedJobs
      },
      {
        path: 'posted-jobs',
        Component: PostedJobs
      },
      {
        path: "jobs/:id/edit",
        element: <EditJob></EditJob>
      },
      {
        path: "applicants",
        Component: Applicants
      },
      {
        path: "dashboard-home",
        Component: DashboardHome
      }
    ]
  }
])