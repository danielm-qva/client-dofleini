import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openAddDialogNot } from "../redux/slice/dialogBoto";
import { Form } from "react-router-dom";
import { useFormik } from "formik";
import { clientAxios } from "../hooks/clienteAxios";
import { toast } from 'react-hot-toast';

function AddDialog() {

    const dispacht = useDispatch();
    const isOpen = useSelector((store: any) => store.dialog.isOpenAddDialog)

    const handleClose = () => {
        dispacht(openAddDialogNot());
        FromFormk.resetForm();
    };

    const FromFormk = useFormik({
        initialValues: { "question": '' },
        onSubmit: (value) => {
            clientAxios.post('/survey' , JSON.stringify(value)).then(a => {
                  toast.success('Registro exitoso..!!!');
                  dispacht(openAddDialogNot())
                  FromFormk.resetForm();
            }).catch(error => {
                toast.error(error.message);
                dispacht(openAddDialogNot());
            })
        }

    });
    return (
        <Dialog open={isOpen} onClose={handleClose} maxWidth='lg'>
            <DialogTitle>Survey</DialogTitle>
            <DialogContent >
                <DialogContentText>
                    Question
                </DialogContentText>
                <Form onSubmit={FromFormk.handleSubmit} style={{
                    marginBottom: '6px',
                    display: 'grid',
                    justifyContent: 'center'
                }} >
                    
                    <TextField
              margin="normal"
              required
              fullWidth
              id="question"
              label="Question"
              name="question"
              autoFocus
              onChange={FromFormk.handleChange}
              value={FromFormk.values.question}
              rows={4}
            />
                    <Button
                        type='submit'
                        fullWidth
                        variant="contained" size="small" color="primary">
                        Add Surey
                    </Button>
                </Form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}
export default AddDialog;   