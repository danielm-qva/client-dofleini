import { useEffect, useState } from "react";
import { clientAxios } from "../hooks/clienteAxios";
import { useDispatch } from "react-redux";
import { Grid, Box } from '@mui/material'
import { addlist } from "../redux/slice/sliceListSurvey";
import Survey from "./Survey";

function ListSurvey() {

    const dispacht = useDispatch();
    const [listsurvey, setListSurvey] = useState([])
    useEffect(() => {
        clientAxios.get('/survey').then(res => {
            dispacht(addlist({ list: res.data }))
            setListSurvey(res.data);
        })
    }, []);

    return (

        <Box sx={{ flexGrow: 1 ,  marginTop: 5}} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    listsurvey.map((a: any) =>
                    (
                        <Grid item xs={2} sm={4} md={4} key={a.id}>
                              <Survey question={a.question} dateInit={a.createdAt} key={a.id} />
                        </Grid>

                    ))
                }

            </Grid>
        </Box>
    );

}

export default ListSurvey;