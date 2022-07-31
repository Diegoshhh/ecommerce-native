import { StyleSheet, Text, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from '../../shared/LoadingModal/Modal'
import * as Location from 'expo-location'
import { ErrorToast } from 'react-native-toast-message'
import MapView, { Marker } from 'react-native-maps'

const MapForm = (props) => {
    const {show , close} = props
    const [location, setLocation] = useState({
      latitud: 37.78825,
      longitud: -122.4324,
      latitudDelta: 0.001,
      longitudDelta: 0.001
    })

    useEffect(() => {
      (async () => {
        const {status} = await Location.requestForegroundPermissionsAsync() 

        if(status !== 'granted'){
          ErrorToast.show({
            type: 'info',
            position:'bottom',
            text1: 'Tienes que ir a ajustes y activar la localizacion',
          })
          return
        }

        const locationTemp = await Location.getCurrentPositionAsync({})

        setLocation({
          latitud: locationTemp.coords.latitude,
          longitud: locationTemp.coords.longitude,
          latitudDelta: 0.001,
          longitudDelta: 0.001
        })
      }) ()
    }, [])
    

  return (
    <Modal show={show} close={close}>
        <View>
          <MapView
            style={styles.mapStyle} 
            initialRegion={location} 
            showsUserLocation
            onRegionChange={locationTemp => setLocation(locationTemp)}
          >
            {/* <Marker draggable 
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324
              }}
              title='Esto es un titulo'
            /> */}
          </MapView>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  mapStyle:{
    width: '100%',
    height: 550,
  }
});

export default MapForm