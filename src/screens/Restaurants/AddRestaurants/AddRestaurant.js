import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InfoForm from '../../../components/Restaurants/AddRestaurant/InfoForm'
import { Button } from '@rneui/base'
import { useFormik } from 'formik'
import {initialValues, validationSchema} from './AddRestaurant.data'

const AddRestaurant = () => {


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange:false,
    onSubmit: async(formValue) => {
      console.log(formValue)
    }
  })

  return (
    <View>
      <InfoForm formik={formik}/>

      <Button
          title='Crear Restaurante'
          buttonStyle={styles.addRestaurante}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  addRestaurante:{
    marginHorizontal:20,
    backgroundColor:'#7844c5'
  }
});

export default AddRestaurant