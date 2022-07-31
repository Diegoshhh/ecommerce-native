import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screen } from '../data/screenName'
import FavoritesScreen from '../screens/FavoritesScreen'


const Stack = createStackNavigator()

const RestaurantStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={screen.favorites.favorites} 
            component={FavoritesScreen} 
            options={{title:'Favorites'}} 
        />
        
    </Stack.Navigator>
  )
}

export default RestaurantStack