import React, { useEffect, useState } from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import LoadingModal from '../../components/shared/LoadingModal/LoadingModal'
import UserLoggedScreen from './UserLoggedScreen'
import UserGuestScreen from './UserGuestScreen'




const AccountScreen = () => {

  const [hasLogged, setHasLogged] = useState(null)

  useEffect(() => {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        setHasLogged(user ? true : false)
      })
  }, [])
  
  if(hasLogged === null){
    return <LoadingModal/>
  }

  return hasLogged ? <UserLoggedScreen/> : <UserGuestScreen/>  
}

export default AccountScreen