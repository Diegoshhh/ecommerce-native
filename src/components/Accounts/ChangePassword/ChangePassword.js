import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Input } from '@rneui/base'
import {useFormik} from 'formik'
import {getAuth, updatePassword, EmailAuthProvider,reauthenticateWithCredential} from 'firebase/auth'
import {initialValues, validationSchema} from './ChangePassword.data'

const ChangePassword = (props) => {

    const {onClose} = props 

    const [showPassword, setShowPassword] = useState(false)

    const onShowPassword = () => { setShowPassword(prevState => !prevState)}

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange:false,
        onSubmit: async(formValue) => {
            try {
                const currentUser = getAuth().currentUser
                const credentials = EmailAuthProvider.credential(
                    currentUser.email,
                    formValue.password
                )
                reauthenticateWithCredential(currentUser, credentials)

                await updatePassword(currentUser, formValue.newPassword)

                onClose()

            } catch (error) {
                console.log(error)
            }
        }
    })


    return (
        <View style={styles.content}>
            <Input
                style={styles.input}
                placeholder='Contraseña Actual' 
                secureTextEntry={showPassword ? false : true}
                rightIcon={{
                    type: 'material-community', 
                    name: showPassword ? 'eye-off-outline' : 'eye-outline',
                    color:'#7844c5',
                    onPress: onShowPassword
            }}
                onChangeText={(text) => formik.setFieldValue('password', text)}
                errorMessage={formik.errors.password}
            />
            <Input
                style={styles.input}
                placeholder='Nueva Contraseña' 
                secureTextEntry={showPassword ? false : true}
                rightIcon={{
                    type: 'material-community', 
                    name: showPassword ? 'eye-off-outline' : 'eye-outline',
                    color:'#7844c5',
                    onPress: onShowPassword
            }}
                onChangeText={(text) => formik.setFieldValue('newPassword', text)}
                errorMessage={formik.errors.newPassword}
            />
            <Input
                style={styles.input}
                placeholder='Repite Contraseña' 
                secureTextEntry={showPassword ? false : true}
                rightIcon={{
                    type: 'material-community', 
                    name: showPassword ? 'eye-off-outline' : 'eye-outline',
                    color:'#7844c5',
                    onPress: onShowPassword
            }}
                onChangeText={(text) => formik.setFieldValue('confirmNewPassword', text)}
                errorMessage={formik.errors.confirmNewPassword}
            />
            <Button 
                title={'Cambiar contraseña'}
                color='#7844c5'
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}


const styles = StyleSheet.create({

input:{
paddingHorizontal:10,
paddingTop:10,
},
});

export default ChangePassword