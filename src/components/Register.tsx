import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { clientAxios } from "../hooks/clienteAxios";
import { toast } from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();
    const formikLogin = useFormik({
        initialValues: { "username": "", "fullName": "", "password": '' },
        onSubmit: (value) => {
            console.log(value);
            clientAxios.post('/register' ,JSON.stringify(value)).then((a) => {
                toast.success('Registro exitoso!!!', {
                    icon: '😉',
                  });
            }).catch(error => {
                toast.error('Ha ocurrido un problam', {
                    icon: '😒',
                  });
            })
        }
    })


    return (
        <Container component="main" maxWidth="md">
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
                    backgroundColor: 'white'
                }}
            >
                <Typography sx={{ marginTop: 1 }} component="h1" variant="h5">
                  Register
                </Typography>
                <Form style={{
                    margin: '5px px 2px',
                    padding: '5px 20px 10px',
                    minHeight: '400px'
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
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                            autoComplete="fullName"
                            autoFocus
                            onChange={formikLogin.handleChange}
                            value={formikLogin.values.fullName}
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
                          Register
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            color="error"
                            sx={{ mt: 3, mb: 2, }}
                            onClick={() => navigate('/login')}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Form>
            </Box>
        </Container>
    );

}


export default Register;