import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/error-page'; 
import Login from '../components/Login';
import ListSurvey from '../components/ListSurvey';
import Register from '../components/Register';
import Home from '../components/Home';
import Profile from '../components/Profile';
import ProtectRouter from '../pages/ProtectRouter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
          children: [
             {
                path: '/survey',
                element: <ProtectRouter children={ <ListSurvey />} />
             },
             {
               path: '/home',
               element: <Home />
            },
            {
               path: '/profile',
               element: <ProtectRouter children={ <Profile />} />
            }
          ]
    },
    {
         path: '/login',
         element: <Login/>
     },
     {
        path: '/register',
        element: <Register />
     }
])

export default router;