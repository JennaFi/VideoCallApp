import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Jenna</Text>
        <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.iconButton}>
          <Ionicons name='ios-camera-reverse' size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <Ionicons name='ios-camera-reverse' size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <Ionicons name='ios-camera-reverse' size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <Ionicons name='ios-camera-reverse' size={30} color={'white'} />
        </View>
      
      </View>

      
    </View>)
}



const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7b4e80',

  },
  cameraPreview: {
    
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10
    

  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15
    
  
  },
  phoneNumber: {
    fontSize: 25,
    color: 'white'

  },
  buttonsContainer: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'space-between'
   
    
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 10,
    borderRadius: 50
  }
})

export default CallingScreen
