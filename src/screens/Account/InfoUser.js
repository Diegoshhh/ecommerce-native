import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from '@rneui/themed'
import {getAuth, updateProfile} from 'firebase/auth'
import { Icon } from '@rneui/base'
import * as ImagePicker from 'expo-image-picker'
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'


const InfoUser = (props) => {
  
    const {setLoading} = props
    const {uid, photoURL, displayName, email} = getAuth().currentUser
    const [avatar, setAvatar] = useState(photoURL)

    const changeAvatar = async() => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect: [4,3],
        })
        if(!result.cancelled) uploadImage(result.uri)
    }

    const uploadImage = async(uri) => {

        setLoading(true)

        const response = await fetch(uri)
        const blob = await response.blob()

        const storage = getStorage()
        const storageRef = ref(storage, `avatar/${uid}`)

        uploadBytes(storageRef, blob).then((snapshot) => {
            updatePhotoUrl(snapshot.metadata.fullPath)
        })
    }

    const updatePhotoUrl = async(imagePath) => {
        const storage = getStorage()
        const imageRef = ref(storage, imagePath)
        
        const imageUrl = await getDownloadURL(imageRef)

        const auth = getAuth()
        updateProfile(auth.currentUser, {photoURL: imageUrl})

        setAvatar(imageUrl)
        setLoading(false)
    }

    return (
    <View style={styles.content}>
        {
            !avatar ? (
                <Avatar 
                    size='large' 
                    rounded
                    icon={{ name: 'home' }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHvr6cX8JIVepL639sXxQ3PPYuaVk_wZBD4TFilCwrOilViPS5bMTGnEfSWHC9J4mvew&usqp=CAU'}}
                >
                    <Avatar.Accessory size={24} onPress={changeAvatar}/>
                </Avatar>
            )
            :
                <Avatar 
                    size='large' 
                    rounded
                    source={{ uri: avatar}}
                >
                    <Avatar.Accessory size={24} onPress={changeAvatar}/>
                </Avatar>
        }
      <View style={{marginLeft:10}}>
          <Text style={styles.displayName}>{displayName || 'Anonimo'}</Text>
          <Text style={styles.email}>{email || 'Anonimo'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'flex-start',
    },
    displayName:{
        paddingBottom:5,
        fontWeight:'bold',
        fontSize:15
    },
    email:{

    }
});

export default InfoUser