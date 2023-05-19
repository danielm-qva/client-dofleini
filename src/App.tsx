import './App.css'
import AppNavbar from './components/AppNavbar'
import { Container, Grid, Box } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import { Outlet } from "react-router-dom";
import DialogBot from './components/DialogBoto';

function App() {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} containerStyle={{ marginTop: '82px' }} />
      <DialogBot/>
      <header>
        <AppNavbar />
      </header>
      <body>
        <Container>
          <Box
            sx={{ display: 'flex' }}
          >
            <Outlet />
          </Box>
        </Container>
      </body>
    </>
  )
}

export default App
