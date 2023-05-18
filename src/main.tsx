import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {RouterProvider} from 'react-router-dom';
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts';
import router from './utils/router.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
