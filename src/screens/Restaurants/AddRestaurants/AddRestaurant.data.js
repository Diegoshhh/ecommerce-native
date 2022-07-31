import * as Yup from 'yup'



export function initialValues(){
    return{
        name: '',
        address:'',
        phone:'',
        email:'',
        description:''
    }
}

export function validationSchema(){
    return Yup.object({
        name: Yup.string().required('El campo es obligatorio'),
        address: Yup.string().required('El campo es obligatorio'),
        phone: Yup.string().required('El campo es obligatorio'),
        email: Yup.string().email('No es un email valido').required('El campo es obligatorio'),
        description: Yup.string().required('El campo es obligatorio'),
    })
}