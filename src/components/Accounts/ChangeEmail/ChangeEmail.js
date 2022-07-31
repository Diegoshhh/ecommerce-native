import { Input } from '@rneui/base'
import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import {initialValues, validationSchema} from './ChangeEmail.data'
import {useFormik} from 'formik'
import {getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential} from 'firebase/auth'


const ChangeEmail = (props) => {

    const {onClose, onReload} = props
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

                await updateEmail(currentUser, formValue.email)

                onReload()
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
                    placeholder='Nuevo email'
                    onChangeText={text => formik.setFieldValue('email', text)}
                    errorMessage={formik.errors.email}
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    rightIcon={{
                        type: 'material-community', 
                        name: 'at',
                        color:'#7844c5',
                    }}
                />
                <Input
                    style={styles.input}
                    placeholder='Contraseña' 
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
            <Button 
                title={'Cambiar email'}
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

export default ChangeEmail