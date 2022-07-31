import * as Yup from 'yup';

export function initialValues(){
    return {
        email:'',
        password:'',
        repeatPassword:''
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
        repeatPassword: Yup.string()
            .required('La contraseña es obligatoria')
            .oneOf([Yup.ref('password')], 'Las contraseñas tienen que ser iguales ')
    })
}