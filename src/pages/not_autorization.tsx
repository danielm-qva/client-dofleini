import { Box, Button, Container } from "@mui/material";
import { useRouteError, useNavigate } from "react-router-dom";

export default function NotAutorizations() {
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
                    <p >Sorry, not Authorization...😢.. pleas statar login</p>

                    <Button
                        variant="contained"
                        onClick={() => navigator('/')}

                    >
                        Home
                    </Button>
                </div>

            </Box>
        </Container>
    );
}