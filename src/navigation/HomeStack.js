import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screen } from '../data/screenName'
import HomeScreen from '../screens/Home/HomeScreen'
import InfoCartProduct from '../components/products/InfoProduct/InfoCartProduct'




const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen 
            name={screen.home.home} 
            component={HomeScreen} 
        />
        <Stack.Screen 
            name={screen.home.infocartproduct} 
            component={InfoCartProduct} 
        />
    </Stack.Navigator>
  )
}

export default HomeStack