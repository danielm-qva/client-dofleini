import { Avatar, Box, Card, CardContent, Grid, Typography, Badge } from "@mui/material";
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector((store: any) => store.app.user)
     const date = new Date(user.createdAt).toLocaleDateString('en-GB');
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>

            <Card sx={{ width: '50%', boxShadow: '5px 5px 10px black', marginTop: '20px', }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Profile
                    </Typography>
                    <br/>
                    <Box sx={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'black',
                        marginBottom: '5px'
                            
                    }}>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>

                        <Badge color="success" variant="dot" anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>
                            <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} />
                        </Badge>
                        <Typography>
                            create: { date }
                        </Typography>
                    </Box>
                    <Grid
                        container
                        spacing={3}
                        rowGap={5}
                        marginTop={2}
                    >
                        <Grid item xs={4}>
                            <Box sx={{
                                display: 'grid',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Typography variant="h5" component='h2'>
                                    User name
                                </Typography>
                                {user.username}
                            </Box>
                        </Grid>
                        <Grid item >
                            <Box sx={{
                                display: 'grid',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Typography variant="h5" component='h2'>
                                    Full Name
                                </Typography>
                                {user.fullname}
                            </Box>
                        </Grid>
                    
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )

}

export default Profile;