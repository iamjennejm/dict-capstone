import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import Root from "./pages/Root";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import JobsPage from "./pages/JobsPage";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import CompanyDashboardPage from "./pages/CompanyDashboardPage";
import CompanySettingsPage from "./pages/CompanySettingsPage";
import ProfilesPage from "./pages/ProfilesPage";
import JobSeekerProfilePage from "./pages/JobSeekerProfilePage";
import JobSeekerResumePage from "./pages/JobSeekerResumePage";
import JobSeekerDashboardPage from "./pages/JobSeekerDashboardPage";
import SignupJobseekerPage from "./pages/SignupJobseekerPage";
import JobSeekerSettingsPage from "./pages/JobSeekerSettingsPage";
import SignupEmployerPage from "./pages/SignupEmployerPage";
import MyApplicationPage from "./pages/MyApplicationPage";
import ReviewPage from "./pages/ReviewPage";
import AboutUsPage from "./pages/AboutUsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signupjobseeker",
    element: <SignupJobseekerPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signupemployer",
    element: <SignupEmployerPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobs",
    element: <JobsPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/profiles",
    element: <ProfilesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobseeker/profile",
    element: <JobSeekerProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobseeker/resume",
    element: <JobSeekerResumePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobseeker/myapplications",
    element: <MyApplicationPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobseeker/settings",
    element: <JobSeekerSettingsPage />,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "/jobseeker",
    element: <JobSeekerDashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/companies",
    element: <CompaniesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/company",
    element: <CompanyDashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/company/settings",
    element: <CompanySettingsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/company/profile",
    element: <CompanyProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobseeker/profile/review",
    element: <ReviewPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


