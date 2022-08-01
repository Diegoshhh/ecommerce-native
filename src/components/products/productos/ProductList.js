import React from 'react'
import { View } from 'react-native'
import ProductCard from './productCard/ProductCard'



const ProductList = ({products}) => {

  return (

    <View>
        <View
            style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-between'
            }}
        >
            {
                products.map((data) => {
                    return <ProductCard data={data} key={data.id}/>
                })
            }
        </View>
    </View>
  )
}

export default ProductList