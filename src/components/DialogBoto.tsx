import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { hidden } from '../redux/slice/dialogBoto';
import { deleteDetailSurvey, removelist } from '../redux/slice/sliceListSurvey';
import { Form, useNavigate } from 'react-router-dom';
import { FormControl, Radio, RadioGroup } from '@mui/material';
import { useFormik } from 'formik';
import { clientAxios } from '../hooks/clienteAxios';


export default function DialogBot() {

    const dispacht = useDispatch();
    const isOpen = useSelector((store: any) => store.dialog.isopen)
    const detailSurvey = useSelector((store: any) => store.surveyL.detailSurvey)
    const idUser: string = useSelector((store: any) => store.app.user._id)
    const navigate = useNavigate();

    const handleClose = () => {
        dispacht(hidden());
        dispacht(deleteDetailSurvey());
    };

    const FromFormk = useFormik({
    initialValues: { "Boto": ""},
    onSubmit : (value) => {
         const a = {...detailSurvey};
             if(value.Boto == "SI"){
                a.answerPositive += 1;
                  clientAxios.patch('/survey/'+ detailSurvey._id, JSON.stringify(a)).then(a => {
                    console.log(a.data);
                      if(a.status == 200){
                        clientAxios.put('/surveyIdBoto/'+ detailSurvey._id , JSON.stringify({ "idUser":idUser})).then(res => {
                            dispacht(hidden());
                            dispacht(removelist());
                        })
                      }
                  })
             }else {
                a.answerNegaitve += 1;
                clientAxios.patch('/survey/'+ detailSurvey._id, JSON.stringify(a)).then(a => {
                  console.log(a.data);
                    if(a.status == 200){
                      clientAxios.put('/surveyIdBoto/'+ detailSurvey._id , JSON.stringify({ "idUser":idUser})).then(res => {
                          dispacht(hidden());
                          dispacht(removelist())
                      })
                    }
                })
             }
    } 
    
})

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>Survey</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        {detailSurvey.question}
                    </DialogContentText>
                    <Form onSubmit={FromFormk.handleSubmit} >
                        <FormControl>
                            <RadioGroup defaultValue="medium" name="Boto" defaultChecked = {true} value={FromFormk.values.Boto}  onChange={FromFormk.handleChange}>
                              
                                   <label>
                                    <Radio value="SI" color="success"
                                    /> SI
                                    </label>
                                
                                <label>
                                    <Radio value="NO" color="warning" /> NO
                                </label>
                            </RadioGroup>
                        </FormControl>
                        <Button
                                type='submit'
                                fullWidth
                                variant="contained" size="small" color="primary">
                                Botar
                            </Button>
                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}