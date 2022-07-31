import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screen } from '../data/screenName'
import RankingScreen from '../screens/RankingScreen'


const Stack = createStackNavigator()

const RankingStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={screen.ranking.ranking} 
            component={RankingScreen} 
            options={{title:'Ranking'}} 
        />
    </Stack.Navigator>
  )
}

export default RankingStack