import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/error-page'; 
import Login from '../components/Login';
import ListSurvey from '../components/ListSurvey';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
          children: [
             {
                path: '/survey',
                element: <ListSurvey />
             }
          ]
    },
    {
         path: '/login',
         element: <Login/>
     },
     {
        path: '/register'
     }
])

export default router;