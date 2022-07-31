import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import { screen } from '../data/screenName'


import RestaurantStack from './RestaurantStack'
import FavoritesStack from './FavoritesStack'
import RankingStack from './RankingStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'






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
            name={screen.restaurant.tab} 
            component={RestaurantStack}
            options={{title:'Restaurant'}}
        />
        <Tab.Screen 
            name={screen.favorites.tab} 
            component={FavoritesStack}
            options={{title:'Favorites'}}
        />
        <Tab.Screen 
            name={screen.ranking.tab} 
            component={RankingStack}
            options={{title:'Ranking'}}
        />
        <Tab.Screen 
            name={screen.search.tab} 
            component={SearchStack}
            options={{title:'Search'}}
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

    if(route.name === screen.restaurant.tab){
        iconName = "home-outline" //silverware-fork-knife
    }
    if(route.name === screen.favorites.tab){
        iconName = "heart-outline"
    }
    if(route.name === screen.ranking.tab){
        iconName = "star-outline"
    }
    if(route.name === screen.search.tab){
        iconName = "magnify"
    }
    if(route.name === screen.account.tab){
        iconName = "account-outline"
    }

    return (
        <Icon type='material-community' name={iconName} color={color} size={size} />
    )
    
}


export default Navigation