import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { clientAxios } from "../hooks/clienteAxios";
import { Form, useNavigate } from "react-router-dom";
import { applogin, isLoading, notisLoading } from '../redux/slice/sliceApp';
import { toast } from 'react-hot-toast';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import LoadingApp from './Loading';

function Login() {
  const navigate = useNavigate();
  const isLoding = useSelector((store: any) => store.app.isLoading);
  const dispatch = useDispatch();

  const formikLogin = useFormik({
    initialValues: { "username": "", "password": '' },
    onSubmit: (value) => {
      dispatch(isLoading());
      clientAxios.post('/login', JSON.stringify(value)).then((res) => {
        dispatch(applogin({ user: res.data.foundUser, token: res.data.toke }));
        toast.success('Login exitoso!!!', {
          icon: '😉',
        });
        setTimeout(() => {
          dispatch(notisLoading());
          navigate('/')
        }, 1000)
      }).catch(error => {
        toast.error(error.message, {
          icon: '😢',
        })
        setTimeout(() => {
          dispatch(notisLoading());
        }, 1000)

      });
    }
  })

  if (isLoding) {
    return <LoadingApp />;
  }
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: '1px solid black',
          borderRadius: '5px',
          boxShadow: '10px 15px 15px black',
          width: '550px',
          height: '350px',
          backgroundColor: 'white'
        }}
      >
        <Typography sx={{marginTop: 1}} component="h1" variant="h5">
          Sign in
        </Typography>
        <Form style={{
          margin: '5px px 2px'
        }} onSubmit={formikLogin.handleSubmit} >
          <Box sx={{
            marginTop: 2
          }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={formikLogin.handleChange}
              value={formikLogin.values.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formikLogin.handleChange}
              value={formikLogin.values.password}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            marginTop: 3
          }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 2 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, }}
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </Box>
        </Form>
      </Box>
    </Container>
  );
}

export default Login;