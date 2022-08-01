import React from 'react'
import { View, Text } from 'react-native'
import ProductCard from '../productos/productCard/ProductCard';
import { styles } from './Accesories.styles';


const Accessories = ({accessory}) => {
    
  return (
    <View style={{padding:16}}>
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}> Accessories </Text>
                <Text style={styles.textQuantityAccessoryAvailable}> 78 </Text>
            </View>
            <Text style={styles.textSeeAll}> SeeAll </Text>
        </View>

        <View style={styles.accessoryContainer}>
            {accessory.map((data) => {
                return <ProductCard data={data} key={data.id}/>
            })}
        </View>
    </View>
  )
}

export default Accessories