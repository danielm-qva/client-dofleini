import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { clientAxios } from "../hooks/clienteAxios";
import { Form, useNavigate } from "react-router-dom";
import { applogin, isLoading, notisLoading  } from '../redux/slice/sliceApp';
import { toast } from 'react-hot-toast';
import { Box, Button, Container,FormControlLabel, TextField, Typography } from '@mui/material';
import LoadingApp from './Loading';

function Login() {
    const navigate = useNavigate();
    const isLoding = useSelector((store: any) => store.app.isLoading);
    const dispatch = useDispatch();
    
    const formikLogin = useFormik({
        initialValues: { "username": "", "password":'' },
        onSubmit: (value) => {
            dispatch(isLoading());
            clientAxios.post('/login', JSON.stringify(value)).then((res) => {
                console.log(res.data);
                dispatch(applogin({ user: res.data.foundUser, token: res.data.toke }));
                toast.success('Login exitoso!!!', {
                    icon: '😉',
                });
                setTimeout(() => {
                    dispatch(notisLoading());
                    navigate('/')
                   },1000)
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

     if(isLoding) {
        return  <LoadingApp />;
    }
    return (
        <Container component="main" maxWidth="xs">
        <Box
          sx={{  
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form onSubmit={formikLogin.handleSubmit} >
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,}}
            >
               Register
            </Button>
          </Form>
        </Box>
      </Container>
    );
}

export default Login;