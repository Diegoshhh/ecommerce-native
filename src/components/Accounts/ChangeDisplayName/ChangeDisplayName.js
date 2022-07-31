import React from 'react'
import { View, StyleSheet, Button, ToastAndroid } from 'react-native'
import { Input } from '@rneui/base';
import {useFormik} from 'formik'
import {getAuth, updateProfile} from 'firebase/auth'
import {initialValues, validationSchema} from './ChangeDisplayNameForm.data'


const ChangeDisplayName = (props) => {

    const {onClose, onReload} = props

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange:false,
        onSubmit: async(formValue) => {
            try {
                const {displayName} = formValue;
                const currentUser = getAuth().currentUser
                await updateProfile(currentUser, {displayName})

                onReload()
                onClose()
            } catch (error) {
                ToastAndroid.showWithGravityAndOffset(
                    'Error',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                )
            }
        }
    })


  return (
    <View style={styles.content}>
            <Input
                style={styles.input}
                placeholder='Nombre y Apellido' 
                rightIcon={{
                    type: 'material-community', 
                    name:'account-circle-outline',
                    color:'#7844c5',
            }}
                onChangeText={(text) => formik.setFieldValue('displayName', text)}
                errorMessage={formik.errors.displayName}
            />
        <Button 
            title={'Cambiar nombre y apellido'}
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
        paddingVertical:10,
    },
});

export default ChangeDisplayName