import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from '@rneui/base';
import {useFormik} from 'formik';
import { initialValues, validationSchema } from '../../data/LoginData'
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import { screen } from '../../data/screenName';


const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigation =  useNavigation()


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange:false,
        onSubmit: async(formValue) => {
                try {
                    const auth = getAuth()
                    await signInWithEmailAndPassword(
                        auth,
                        formValue.email, 
                        formValue.password 
                    ) 
                    navigation.navigate(screen.account.account)
                } catch (error) {
                    console.log(error)
                }
            },
    })

    const showHiddenPassword = () => setShowPassword(prevState => !prevState)

  return (
    <View style={styles.containerInputs}>
            <View style={styles.viewInput}>
            <TextInput 
                style={styles.textInput} 
                placeholder='Correo Electronico'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                onChangeText={text => formik.setFieldValue('email', text)}
            />
            <Icon 
                color='#7844c5'
                type='material-community' 
                name='at'
            />
        </View>
        <View style={styles.viewInput}>
            <TextInput 
                style={styles.textInput} 
                placeholder='Contraseña'
                secureTextEntry={showPassword ? false : true}
                onChangeText={text => formik.setFieldValue('password', text)}
            />
            <Icon 
                color='#7844c5'
                type='material-community' 
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                onPress={showHiddenPassword}
            />
        </View>
        <View>
            <TouchableOpacity 
                onPress={formik.handleSubmit}
                activeOpacity={0.7}
                style={styles.btn}
            >
                <Text style={styles.btnText}>Inicia Sesion</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
      containerInputs:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'column',
    },
    viewInput:{
        backgroundColor:'white',
        borderRadius:10,
        width: '90%',
        height: 50,
        paddingHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

        elevation: 10,
    },
    textInput:{
        flex: 1,
        fontSize:16,
    },
    containerTouchable:{
        marginTop:20
    },
    btn:{
        alignItems:'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
        marginTop:40,
        borderRadius:5,
        backgroundColor:'#7844c5',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
      },
      btnText:{
        color: '#fff',
        textTransform:'uppercase',
        fontSize:18,
    }
});

export default LoginForm