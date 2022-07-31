import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screen } from '../data/screenName'
import SearchScreen from '../screens/SearchScreen'


const Stack = createStackNavigator()

const SearchStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={screen.search.search} 
            component={SearchScreen} 
            options={{title:'Search'}} 
        />
    </Stack.Navigator>
  )
}

export default SearchStack