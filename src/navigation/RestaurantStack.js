import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screen } from '../data/screenName'
import RestauranteScreen from '../screens/Restaurants/RestaurantScreen'
import AddRestaurant from '../screens/Restaurants/AddRestaurants/AddRestaurant'



const Stack = createStackNavigator()

const RestaurantStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={screen.restaurant.restaurants} 
            component={RestauranteScreen} 
            options={{title:'Restaurantes'}} 
        />
        <Stack.Screen 
            name={screen.restaurant.addRestaurant} 
            component={AddRestaurant} 
            options={{title:'New Restaurant'}} 
        />
    </Stack.Navigator>
  )
}

export default RestaurantStack