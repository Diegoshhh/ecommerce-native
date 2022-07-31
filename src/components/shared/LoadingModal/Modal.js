import React from 'react'
import { Overlay } from '@rneui/base'
import { StyleSheet } from 'react-native'




const Modal = (props) => {

    const {show, close, children} = props 
 
  return (
    <Overlay isVisible={show} overlayStyle={styles.overplay} onBackdropPress={close}>
      {children}
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overplay:{
        width: '90%',
        height: 'auto',
        backgroundColor:'#fff'
    }
});

export default Modal