import { useEffect, useState } from "react";
import { clientAxios } from "../hooks/clienteAxios";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Button, Typography } from '@mui/material'
import { addDetailSurvey, addlist } from "../redux/slice/sliceListSurvey";
import Survey from "./Survey";
import { open, openAddDialog } from "../redux/slice/dialogBoto";
import { useNavigate } from "react-router-dom";

function ListSurvey() {

    const dispacht = useDispatch();
    const navigate = useNavigate();

    const token: string = useSelector((store: any) => store.app.token);
    const isopen = useSelector((store: any) => store.dialog.isopen)
    const idUser = useSelector((store: any) => store.app.user._id);
    const isopenDialogAdd = useSelector((store: any) => store.dialog.isOpenAddDialog)
    const listSurvey  = useSelector((store: any) => store.surveyL.listSurvey);
    const botosUser = useSelector((store: any) => store.surveyL.listSurvey.idBotosUser);
    const isclose = useSelector((store : any) => store.dialog.isclose);

    useEffect(() => {
        clientAxios.defaults.headers.common['Authorization'] = 'Beare ' + token;
        clientAxios.get('/survey').then(res => {
            dispacht(addlist({ list: res.data }))
        }).catch(error => {
            dispacht(addlist({ list: [] }))
        })
    }, [isopen,isopenDialogAdd , isclose]);
    
    const handeOpenDiag = (data: object) => {
        dispacht(open());
        dispacht(addDetailSurvey({detailSurvey: data}));
       }
       const isBotar = (listBotosId: string[]): boolean => {
        return listBotosId.filter(a => a == idUser).length !== 0;
    }
    return (
        <>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '10px',
        }}>
             <Button variant="contained" onClick={() => dispacht(openAddDialog())} > Add Survey </Button>
        </Box>
        <Box sx={{ flexGrow: 1 ,  marginTop: 5}} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                   listSurvey.length == 0 ? (<Typography>No tenemos Encuestas disponibles</Typography>) :  (listSurvey.map((a: any) =>
                    (
                        <Grid item xs={2} sm={4} md={4} key={a.id}>
                              <Survey isclose = {a.isclose} isBoto={isBotar(a.idBotosUser)} idSurvey={a._id} question={a.question} dateInit={a.createdAt} priority={a.priority} key={a.id} idBotos={a.idBotosUser} positiveBoots={a.answerPositive} />
                               {
                                  (isBotar(a.idBotosUser) || a.isclose) ? (<Typography>You can not Bounce in this survey.</Typography>) : <Button  key={a.id} onClick={ () => handeOpenDiag(a)}>Botar</Button>
                              } 
                        </Grid>

                    )))
                }

            </Grid>
        </Box>
            </>
    );

}

export default ListSurvey;