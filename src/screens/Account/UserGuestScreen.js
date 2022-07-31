import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { screen } from '../../data/screenName'


const UserGuestScreen = () => {

  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate(screen.account.login)
  }

  return (
      <ScrollView style={styles.content} centerContent={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Image
          source={require('../../../assets/img/stats.png')}
          style={styles.imagen}
        />
          <Text style={styles.title}>Consultar su perfil de 5-Tenedores</Text>
          <Text style={styles.description}>
            Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado mas y comenta como
              a sido tu experiencia.
          </Text>

          <View style={styles.containerTouchable}>
            <TouchableOpacity 
              style={styles.btn} 
              activeOpacity={0.7}
              onPress={goToLogin}
            >
              <Text style={styles.btnText}>Ver tu Perfil</Text> 
            </TouchableOpacity>
          
          </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
    marginHorizontal:30,
  },
  imagen:{
    width: '100%',
    height: 300,
    resizeMode:'contain',
    marginBottom:10
  },
  title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:17,
    marginBottom:5
  },
  description:{
    textAlign:'center',
    marginBottom:20
  },
  containerTouchable:{
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    alignItems:'center',
    justifyContent: 'center',
    width: 240,
    height: 40,
    borderRadius:5,
    marginBottom:20,
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
    fontSize:16,
  }
});

export default UserGuestScreen