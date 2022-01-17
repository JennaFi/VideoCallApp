import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const CallActionBox = () => {
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isMicOn, setIsMicOn] = useState(true)

  const onReverseCamera = () => {

  }
  const onToggleCamera = () => {
    setIsCameraOn(currentValue => !currentValue)

  }
  const onToggleMicrophone = () => {
    setIsMicOn(!isMicOn)

  }
  const onHangUp = () => {

  }

  return (
   
    <View style={styles.buttonsContainer}>

      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name='ios-camera-reverse' size={30} color={'white'} />
      </Pressable>

      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <MaterialIcons name={isCameraOn? 'camera-off' : 'camera'} size={30} color={'white'} />
      </Pressable>

      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MaterialIcons name={isMicOn? 'microphone-off' : 'microphone'} size={30} color={'white'} />
      </Pressable>

      <Pressable onPress={onHangUp} style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <MaterialIcons name='phone-hangup' size={30} color={'white'} />
      </Pressable>
      
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
    justifyContent: 'space-between',
    marginTop: 'auto'
   
    
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50
  }
})


export default CallActionBox
