import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from '../../components/Auth/RegisterForm'



const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}}>
      <View style={{flex:1, justifyContent:'space-around',}}>

        <Image style={styles.imageLogo} source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}/>

        <View style={styles.content}>
          <RegisterForm/>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}



const styles = StyleSheet.create({
  imageLogo:{
      width: '100%',
      height: 150,
      resizeMode:'contain',
      marginTop:20,
  },
});

export default RegisterScreen