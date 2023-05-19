import { useEffect, useState } from "react";
import { clientAxios } from "../hooks/clienteAxios";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Button } from '@mui/material'
import { addDetailSurvey, addlist } from "../redux/slice/sliceListSurvey";
import Survey from "./Survey";
import { open } from "../redux/slice/dialogBoto";

function ListSurvey() {

    const dispacht = useDispatch();
    const [listsurvey, setListSurvey] = useState([]);
    const idUser: string = useSelector((store: any) => store.app.user._id);
    const isopen = useSelector((store: any) => store.dialog.isopen)

    useEffect(() => {
        setListSurvey([]);
        clientAxios.get('/survey').then(res => {
            dispacht(addlist({ list: res.data }))
            setListSurvey(res.data);
        })
    }, [isopen]);
    
    const handeOpenDiag = (data: object) => {
        dispacht(open());
        dispacht(addDetailSurvey({detailSurvey: data}));
       }
    const isBotar = (listBotosId: string[]): boolean => {
        console.log(listBotosId.filter(a => a == idUser).length !== 0);
        return listBotosId.filter(a => a == idUser).length !== 0;
    }

    const calcBootsPositve = (listBotosId: string[] , bootspositive: number) => {
        return  Math.floor((bootspositive * 100) / listBotosId.length);
    }

    return (
        <Box sx={{ flexGrow: 1 ,  marginTop: 5}} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    listsurvey.map((a: any) =>
                    (
                        <Grid item xs={2} sm={4} md={4} key={a.id}>
                              <Survey question={a.question} dateInit={a.createdAt} key={a.id} idBotos={a.idBotosUser} positiveBoots={a.answerPositive} />
                              {/* {
                                isBotar(a.idBotosUser) ? <></> : <Button  key={a.id} onClick={ () => handeOpenDiag(a)}>Botar</Button>
                              } */}

                            <Button  key={a.id} onClick={ () => handeOpenDiag(a)}>Botar</Button>
                        </Grid>

                    ))
                }

            </Grid>
        </Box>
    );

}

export default ListSurvey;