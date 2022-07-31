import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet} from 'react-native'


const LoadingModal = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewActivity}>
                <ActivityIndicator
                        size={30}
                        color='#7844c5'
                />
                <Text style={styles.textActivity}>Cargando...</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewActivity:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#7844c5',
        height: 100,
        width: 200,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth:2,
    },
    textActivity:{
        color: '#7844c5',
        marginTop:10,
        textTransform:'capitalize'
    }
});

export default LoadingModal