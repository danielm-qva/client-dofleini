
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, FormControl, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import moment from 'moment';
import { FC , useState , useEffect } from 'react';
import { Form } from "react-router-dom";

interface ISurvey {
    question: string;
    dateInit: Date;
}

const Survey: FC<ISurvey> = ({ question, dateInit }) => {
 
       const [diffDay , setDiffday] = useState(0);
      useEffect(() =>{
        const day1 =  moment();
        const day2 =  moment(dateInit);
        setDiffday(day1.diff(day2, "days"))
      },[])
    return (
        <Card sx={{ minWidth: 345 , minHeight: 250 }}>
            <CardActionArea>
                <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Question 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {question}
                    </Typography>

                    <Grid
                        container
                        direction='column'
                        sx={{marginTop : 3}}
                    >
                           <Typography gutterBottom variant="h5" component="h2">
                        Question 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {question}
                    </Typography>

                    </Grid>

                    {/* <Form >
                    <FormControl>
                        <RadioGroup defaultValue="medium" name="radio-buttons-group">
                            <label>
                                <Radio value="danger" color="warning" /> SI
                            </label>
                            <label>
                                <Radio value="sussce" color="success" /> NO
                            </label>
                        </RadioGroup>

                        <Button
                            fullWidth
                            variant="contained" size="small" color="primary">
                            Botar
                        </Button>
                    </FormControl>
                    </Form > */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                createDay: {diffDay} Days
            </CardActions>
        </Card>
    )
}

export default Survey;