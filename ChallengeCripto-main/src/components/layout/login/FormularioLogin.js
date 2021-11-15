import React from 'react';
import { useDispatch} from 'react-redux';
import { getLoginUser } from '../../../actions/LoginActions';
import { Formik, Form} from 'formik';
import { Button, LinearProgress,  Grid, Card ,Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import * as Yup from "yup";
import _ from 'lodash';
import MyTextField from './MyTextField';
import '../../../themes/formulario.css';

const FormularioFormik = () => {
    const dispatch = useDispatch();


    const SignupSchema = Yup.object().shape({
        //email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        nombre: Yup.string().min(4, 'Name  6 characters!').required('Password is required!'),
        apellido:Yup.string().min(4, 'Apellido has to be longer than 6 characters!').required('Password is required!')
    });

    const login = (values) => {
        dispatch(getLoginUser({ 'nombre': values.nombre, 'apellido': values.apellido }));
    }

    return (
        <Formik
            initialValues={{
                nombre: '',
                apellido: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    login(values);
                    setSubmitting(false);
                    resetForm();
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting, values, setFieldValue }) => (
                <Form>

                    <Grid container direction="row" justify="center" style={{ 'padding': '5%' }} alignItems="center" spacing={2}>
                        <Card className='cardForm'>
                            <Grid item xs={12} md={12} lg={12} >
                                <Typography className="tituloForm">Challenge Login !</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <label className='label'>Nombre *</label><br></br>
                                <MyTextField name="nombre" type="text" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <label className='label'>Apellido *</label><br></br>
                                <MyTextField name="apellido" type="text" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} className="gridItem">
                                <Divider />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>
                            <Grid container spacing={3} className="gridItem">

                                <Grid item xs={12} md={6} lg={6} >
                                    <Button
                                        variant="contained"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                        className='btnAceptar'

                                    >
                                        Enviar
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} >
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        disabled={isSubmitting}
                                        onClick={() => { alert('cancelado') }}
                                        className="btnCancelar"
                                    >
                                        Cancelar
                                    </Button>
                                </Grid>

                            </Grid>
                        </Card>
                    </Grid>

                </Form>

            )}
        </Formik >
    );
}

export default FormularioFormik;
