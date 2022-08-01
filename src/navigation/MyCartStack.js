import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screen } from '../data/screenName'
import MyCartScreen from '../screens/MyCart/MyCartScreen'


const Stack = createStackNavigator()

const MyCartStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={screen.mycart.mycart} 
            component={MyCartScreen} 
        />
    </Stack.Navigator>
  )
}

export default MyCartStack