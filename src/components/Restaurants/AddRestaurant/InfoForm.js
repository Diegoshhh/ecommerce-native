import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input } from '@rneui/base'
import MapForm from './MapForm'



const InfoForm = (props) => {

  const {formik} = props

  const [showMap, setShowMap] = useState(false)


  const onOpenCloseMap = () => setShowMap(prevState => !prevState)

  return (
    <>

      <View style={styles.content}>

        <Input
          placeholder='Nombre del Restaurante'
          onChangeText={text => formik.setFieldValue('name', text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder='Direccion'
          onChangeText={text => formik.setFieldValue('address', text)}
          errorMessage={formik.errors.address}
          rightIcon={{
            type: 'material-community',
            name: 'map-marker-radius-outline',
            color: '#7844c5',
            onPress:onOpenCloseMap
          }}
        />
        <Input
          placeholder='Telefono'
          keyboardType='numeric'
          onChangeText={text => formik.setFieldValue('phone', text)}
          errorMessage={formik.errors.phone}
        />
        <Input
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={text => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
        />
        <Input
          inputContainerStyle={styles.textArea}
          placeholder='Descripcion del Restaurante'
          multiline={true}
          onChangeText={text => formik.setFieldValue('description', text)}
          errorMessage={formik.errors.description}
        />
      </View>

      <MapForm show={showMap} close={onOpenCloseMap}/>
    </>
  )
}

const styles = StyleSheet.create({
  content:{
    marginHorizontal:10,
  },
  textArea:{
    height: 100,
    width: '100%',
    padding: 0,
    margin: 0,
  }
});

export default InfoForm