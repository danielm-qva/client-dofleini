import './App.css'
import AppNavbar from './components/AppNavbar'
import { Container, Grid, Box, Typography } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import { Link, Outlet } from "react-router-dom";
import DialogBot from './components/DialogBoto';
import { Suspense } from 'react';
import LoadingApp from './components/Loading';
import AddDialog from './components/AddDialog';
function App() {
  return (
    <>
      <header>
        <AppNavbar />
        <Toaster position='top-right' reverseOrder={false} containerStyle={{ marginTop: '82px' }} />
         <DialogBot />
        <AddDialog />
      </header>
      <body>
        <Container>

          <Suspense fallback={<LoadingApp />}>
          <Outlet />
          </Suspense>
        </Container>
      </body>

    </>
  )
}

export default App
