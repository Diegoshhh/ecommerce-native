import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import { screen } from '../data/screenName'
import AccountStack from './AccountStack'
import HomeStack from './HomeStack'
import MyCartStack from './MyCartStack'



const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            headerShown:false,
            tabBarActiveTintColor:'#7844c5',
            tabBarInactiveTintColor:'#646464',
            tabBarIcon:({color, size}) => iconTypes(route, color, size)
    })}>
        <Tab.Screen 
            name={screen.home.tab} 
            component={HomeStack}
            options={{title:'Home'}}
        />
        <Tab.Screen 
            name={screen.mycart.tab} 
            component={MyCartStack}
            options={{title:'MyCart'}}
        />
        <Tab.Screen 
            name={screen.account.tab} 
            component={AccountStack}
            options={{title:'Account'}}
        />
    </Tab.Navigator>
  )
}

function iconTypes(route, color, size){
    let iconName;

    if(route.name === screen.home.tab){
        iconName = "home-outline"
    }
    if(route.name === screen.mycart.tab){
        iconName = "cart-outline"
    }
    if(route.name === screen.account.tab){
        iconName = "account-outline"
    }

    return (
        <Icon type='material-community' name={iconName} color={color} size={size} />
    )
    
}


export default Navigation