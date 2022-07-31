import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Icon, ListItem } from '@rneui/base';
import {map} from 'lodash'
import Modal from '../shared/LoadingModal/Modal';
import ChangeDisplayName from './ChangeDisplayName/ChangeDisplayName';
import ChangeEmail from './ChangeEmail/ChangeEmail';
import ChangePassword from './ChangePassword/ChangePassword';



const AccountOptions = (props) => {
  
    const {onReload} = props

    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)

    const onCloseOpenModal = () => setShowModal(prevState => !prevState)

    const selectedComponent = (key) => {
        if(key === 'displayName'){
            setRenderComponent(<ChangeDisplayName onClose={onCloseOpenModal} onReload={onReload}/>)
        }
        if(key === 'email'){
            setRenderComponent(<ChangeEmail onClose={onCloseOpenModal} onReload={onReload}/>)
        }
        if(key === 'password'){
            setRenderComponent(<ChangePassword onClose={onCloseOpenModal}/>)
        }
        onCloseOpenModal()
    }

    const menuOptions = getMenuOptions(selectedComponent)

    return (
    <View>
      {map(menuOptions, (menu, index) => (
            <ListItem 
                key={index} 
                bottomDivider
                onPress={menu.onPress}
            >
            <Icon 
                type={menu.iconType}
                name={menu.iconNameLeft}
                color={menu.iconColorLeft}    
            />
            <ListItem.Content>
                <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>
            <Icon 
                type={menu.iconType}
                name={menu.iconNameRight}
                color={menu.iconColorRight}    
            />
          </ListItem>
      ))}
      <Modal show={showModal} close={onCloseOpenModal }>
          {renderComponent}
      </Modal>
    </View>
  )
}

function getMenuOptions(selectedComponent) {
    return [
        {
            title: 'Cambiar Nombre y Apellidos',
            iconType: 'material-community',
            iconNameLeft: 'account-circle-outline',
            iconColorLeft: '#7844c5',
            iconNameRight:'chevron-right',
            iconColorRight:'#7844c5',
            onPress:() => selectedComponent('displayName')
        },
        {
            title: 'Cambiar Email',
            iconType: 'material-community',
            iconNameLeft: 'at',
            iconColorLeft: '#7844c5',
            iconNameRight:'chevron-right',
            iconColorRight:'#7844c5',
            onPress:() => selectedComponent('email')
        },
        {
            title: 'Cambiar Contraseña',
            iconType: 'material-community',
            iconNameLeft: 'lock-reset',
            iconColorLeft: '#7844c5',
            iconNameRight:'chevron-right',
            iconColorRight:'#7844c5',
            onPress:() => selectedComponent('password')
        },
    ]
}

export default AccountOptions