import { Box, Button, Container, Grid } from "@mui/material";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    const navigator = useNavigate();
    return (

        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 25,
            
            }}
        >
            <Box
                sx={{
                    width: 600,
                    height: 256,
                   justifyContent: 'center',
                   alignContent: 'center',

                }}>
                <div style={{ 
                       display: "block",
                       justifyContent: 'center'
                }}>
                <p>{error.status} - {error.statusText} </p>
                    <h2>Oops!</h2>
                    <p >Sorry, an unexpected error has occurred. 😢</p>

                    <Button
                        variant="contained"
                        onClick={() => navigator('/')}

                    >
                        Home
                    </Button>
                </div>
                
            </Box>
        </Container>
        // <Grid container spacing={2}>
        //     <Grid item xs={6} md={8}>
        //         <p>{error.status} - {error.statusText} </p>
        //         <div id="error-page" >
        //             <h2>Oops!</h2>
        //             <p >Sorry, an unexpected error has occurred. 😢</p>
        //         </div>

        //         <div>
        //             <Button
        //                 variant="contained"
        //                 onClick={() => navigator('/home')}
        //             >
        //                 Home
        //             </Button>

        //         </div>
        //     </Grid>
        //     <Grid item xs={6} md={4}>
        //     </Grid>
        //     <Grid item xs={6} md={4}>
        //     </Grid>
        //     <Grid item xs={6} md={8}>
        //     </Grid>
        // </Grid>


    );
}