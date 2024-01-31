import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/activities/form/ActivityForm";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import TestErrors from "../../features/errors/TestError";
import ProfilePage from "../../features/profiles/ProfilePage";
import LoginForm from "../../features/users/LoginForm";
import App from "../layout/App";
import MixAndMatchEditRoundDetails from "../../features/mixandmatch/dragndrop/MixAndMatchEditRoundDetails";
import RequireAuth from "./RequireAuth";
import RegisterPage from "../../features/home/RegisterPage";
import MixAndMatchOverview from "../../features/mixandmatch/MixAndMatchOverview";
import FeedbackForm from "../../features/home/FeedbackForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [

            {element: <RequireAuth />, children: [
               
                
                {path: 'createActivity', element: <ActivityForm key='create' />},
                {path: 'manage/:id', element: <ActivityForm key='manage' />},
                {path: 'profiles/:username', element: <ProfilePage />},
                {path: 'errors', element: <TestErrors />},
                {path: 'manage/games/', element: <MixAndMatchEditRoundDetails key='edit' />}
            ]},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'overview/mixandmatch', element: <MixAndMatchOverview />},
            {path: 'contact', element: <FeedbackForm />},
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'login', element: <LoginForm />},
            {path: 'register', element: <RegisterPage />},
            {path: 'not-found', element: <NotFound />},
            {path: 'server-error', element: <ServerError />},
            {path: '*', element: <Navigate replace to='/not-found' />},
            
        ]
    }
]

export const router = createBrowserRouter(routes);