
import { Box, Card, CardActions, CardContent, FormControl, Grid, LinearProgress, Button, Typography } from "@mui/material";
import moment from 'moment';
import { FC, useState, useEffect } from 'react';
interface ISurvey {
    question: string;
    dateInit: Date;
    positiveBoots: number;
    idBotos: string[];
}

const Survey: FC<ISurvey> = ({ question, dateInit, positiveBoots, idBotos }) => {

    const [diffDay, setDiffday] = useState(0);
    const [positive, setPositive] = useState(0);


    useEffect(() => {
        const day1 = moment();
        const day2 = moment(dateInit);
        setDiffday(day1.diff(day2, "days"))
    }, [])

    useEffect(() => {
        if (idBotos.length > 0) {
            setPositive(Math.floor(((positiveBoots * 100) / idBotos.length)))
        }
    }, [])


    return (

        <Card sx={{ minWidth: 275 }}>
            <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                    Question
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {question}
                </Typography>

                <Grid
                    container
                    direction='column'
                    sx={{ marginTop: 3 }}
                >
                    {
                        idBotos.length > 0 ? (<>
                            <Box display="flex" alignItems="center">
                                <Box minWidth={35}>
                                    <Typography variant="body2" color="textSecondary">SI </Typography>
                                </Box>
                                <Box width="100%" mr={1}>
                                    <LinearProgress variant="determinate" color="secondary" value={positive} sx={{ height: 8 }} />
                                </Box>
                                <Box minWidth={35}>
                                    <Typography variant="body2" color="textSecondary">{positive}% </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box minWidth={35}>
                                    <Typography variant="body2" color="textSecondary">NO </Typography>
                                </Box>
                                <Box width="100%" mr={1}>
                                    <LinearProgress variant="determinate" color="error" value={100 - positive} sx={{ height: 8 }} />
                                </Box>
                                <Box minWidth={35}>
                                    <Typography variant="body2" color="textSecondary">{100 - positive}% </Typography>
                                </Box>
                            </Box></>) : (<Typography variant="body2" color="textSecondary" component="p">
                                No se han realizado botos.
                            </Typography>)
                    }

                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small">Detail</Button>
                createDay: {diffDay} Days
            </CardActions>
        </Card>
    )
}

export default Survey;