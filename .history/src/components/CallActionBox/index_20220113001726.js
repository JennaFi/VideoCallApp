import React from 'react'
import { StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const CallActionBox = () => {
  return (
    <View>
      <View style={styles.buttonsContainer}>
        <View style={styles.iconButton}>
          <Ionicons name='ios-camera-reverse' size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <MaterialIcons name='camera-off' size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <MaterialIcons name='microphone-off' size={30} color={'white'} />
        </View>

        <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
          <MaterialIcons name='phone-hangup' size={30} color={'white'} />
        </View>
      
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'space-between'
   
    
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50
  }
})


export default CallActionBox
