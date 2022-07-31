import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Image } from 'react-native'
import { screen } from '../../data/screenName'
import LoginForm from '../../components/Auth/LoginForm'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


const LoginScreen = () => {

    const navigation = useNavigation()

    const goToRegister = () => {
        navigation.navigate(screen.account.register)
    }
    
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}}>
            <View style={{flex:1, justifyContent:'space-around', }}>
                <Image style={styles.imageLogo} source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}/>
            
                <View>
                    <View>
                        <LoginForm/>
                    </View>
                    <View>
                        <Text style={styles.registerText}>
                            Aun no tienes cuenta <Text onPress={goToRegister} style={styles.btnRegister}>Registrate</Text>
                        </Text>
                    </View>
                </View>
                
            </View>
        </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    imageLogo:{
        marginTop:40,
        width: '100%',
        height: 150,
        resizeMode:'contain',
    },
    registerText:{
        marginBottom:70,
        alignSelf:'center',
        marginTop:50
    },
    btnRegister:{
        fontSize:17,
        fontWeight:'bold',
        color: '#7844c5',
        textTransform:'capitalize'
    }
});

export default LoginScreen