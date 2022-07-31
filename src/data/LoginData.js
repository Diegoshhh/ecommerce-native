import * as Yup from 'yup';

export function initialValues(){
    return {
        email:'',
        password:'',
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string()
            .trim()
            .lowercase()
            .email('El email no es correcto')
            .required('El email obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria'),
    })
}