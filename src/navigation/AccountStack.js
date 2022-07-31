import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Account/LoginScreen'
import RegisterScreen from '../screens/Account/RegisterScreen'
import AccountScreen from '../screens/Account/AccountScreen'
import { screen } from '../data/screenName'




const Stack = createStackNavigator()

const AccountStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={screen.account.account} 
            component={AccountScreen} 
            options={{title:'Account'}} 
        />
        <Stack.Screen 
            name={screen.account.login} 
            component={LoginScreen} 
            options={{title:'Iniciar Sesion'}} 
        />
        <Stack.Screen 
            name={screen.account.register} 
            component={RegisterScreen} 
            options={{title:'Crea tu cuenta'}} 
        />
    </Stack.Navigator>
  )
}

export default AccountStack