import { Icon } from '@rneui/base'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { screen } from '../../data/screenName'
import {getAuth, onAuthStateChanged} from 'firebase/auth'



const RestauranteScreen = (props) => {
  const {navigation} = props

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()

    onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    }) 

  }, [])
  


  const goToAddRestaurant = () => {
     // Para ir a un lugar especifico de otro stack - forma siempre Recomendada
     navigation.navigate(screen.restaurant.addRestaurant)
  }
  
  return (
    <View style={styles.content}>
      <Text>Restaurante</Text>

      {
        currentUser && (
          <Icon
            reverse
            type='material-community'
            name='plus'
            color='#7844c5'
            containerStyle={styles.btnContainer}
            onPress={goToAddRestaurant}
          />
        )
      }

    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
  },
  btnContainer:{
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});

export default RestauranteScreen


// const navigation = useNavigation()
// () => navigation.navigate('AddRestaurant')

// SOLO CUANDO ES DENTRO DEL MISMO STACK
// navigation.navigate(screen.restaurant.addRestaurant)  