import { getAuth, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AccountOptions from '../../components/Accounts/AccountOptions'
import LoadingModal from '../../components/shared/LoadingModal/LoadingModal'
import InfoUser from './InfoUser'

const UserLoggedScreen = () => {

  const [loading, setLoading] = useState(false)
  const [_, setReload] = useState(false)


  const onReload = () => setReload(prevState => !prevState)

  const logout = async() => {
    const auth = getAuth()
    await signOut(auth)
  }

  return (
    <View style={styles.content}>
      <View style={{alignItems:'center', justifyContent:'center', height:'20%'}}>
        <InfoUser setLoading={setLoading}/>
      </View>

      <View>
        <AccountOptions onReload={onReload}/>
      </View>

      <View style={{alignItems:'center'}}>
        <TouchableOpacity 
          style={styles.btn} 
          activeOpacity={0.7}
          onPress={logout}
        >
          <Text style={styles.btnText}>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>

      {loading && <LoadingModal loading={loading}/>}
      
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    flex:1,
  },
  btn:{
    alignItems:'center',
    justifyContent: 'center',
    width: 130,
    height: 30,
    borderRadius:5,
    marginTop:60,
    backgroundColor:'#7844c5',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  btnText:{
    color: '#fff',
    textTransform:'capitalize',
    fontSize:14,
  }
});

export default UserLoggedScreen