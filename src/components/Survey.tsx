
import { Box, Card, CardActions, CardContent, Grid, LinearProgress, Button, Typography, Tooltip, IconButton } from "@mui/material";
import moment from 'moment';
import { FC, useState, useEffect } from 'react';
import { } from '@mui/icons-material';
import { clientAxios } from "../hooks/clienteAxios";
import { useDispatch, useSelector } from "react-redux";
import { addlist } from "../redux/slice/sliceListSurvey";
import DeleteIcon from '@mui/icons-material/Delete';
import {toast} from 'react-hot-toast';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { isCloseSurvey } from "../redux/slice/dialogBoto";

interface ISurvey {
    question: string;
    dateInit: Date;
    positiveBoots: number;
    idBotos: string[];
    idSurvey: string;
    priority: string;
    isBoto : boolean;
    isclose: boolean
}

const Survey: FC<ISurvey> = ({idSurvey , question, dateInit, positiveBoots, idBotos , priority , isBoto , isclose}) => {

    const [diffDay, setDiffday] = useState(0);
    const [positive, setPositive] = useState(0); 
    const dispacht = useDispatch();
    const token = useSelector((store: any) => store.app.token);
    const listSurvey  = useSelector((store: any) => store.surveyL.listSurvey);

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

    const handleDelete =  () => {
        clientAxios.defaults.headers.common['Authorization'] = 'Beare ' + token;
        clientAxios.delete('/survey/'+ idSurvey).then(a => {
            const listElimn = listSurvey.filter((a: any) => a._id !== idSurvey);
            dispacht(addlist({list: listElimn}))
            toast.success("Record deleted successfully");
        }).catch(error => {
              toast.error(error.message);
        })
    }

    const handelClosed = (data: object) => {
        clientAxios.defaults.headers.common['Authorization'] = 'Beare ' + token;
        clientAxios.patch('/survey/'+ idSurvey , JSON.stringify(data)).then( a => {
            toast.success("Operation successfully");  
            dispacht(isCloseSurvey())
        }).catch(error => {
            toast.error("Operation error");
        })
    }
  
    return (
        <Card sx={{ minWidth: 275 , boxShadow: '5px 5px 10px black' }}>
            <CardContent >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                <Typography gutterBottom variant="h5" component="p">
                 { priority }
                </Typography>
                {
                    isBoto ? (
                        <Tooltip title="Boot done.">
                        <IconButton>
                        <CheckIcon color="success" />
                        </IconButton>
                      </Tooltip>
                        ) :
                         (
                            <Tooltip title="Boot not done.">
                            <IconButton>
                            <ClearIcon  color="error" />
                            </IconButton>
                          </Tooltip>
                        )
                }
                <Button  onClick={handleDelete}>
                    <DeleteIcon/>
                </Button>           
                </Box>
                <Typography variant="body2" color="textSecondary" component="p">
                   <b>
                  Question: {question}
                    </b> 
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
                                    <LinearProgress variant="determinate" style={{color: '#9BB2E5'}} value={positive} sx={{ height: 8 }} />
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
                <Box 
                 sx={{
                    display:'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%'
                 }}
                 >
                {
                    !isclose ? (<Button  onClick={() => handelClosed({'isclose': true})} size="small">Close</Button>) : 
                         (<Button  onClick={() => handelClosed({'isclose': false})} size="small">Open</Button>)
                }
                Created: {diffDay} Days
                </Box>
            </CardActions>
        </Card>
    )
}

export default Survey;