import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Jenna</Text>
        <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>

      </View>
    </View>)
}



const styles = StyleSheet.create({
  page: {
    height: '100%'

  },
  cameraPreview: {
    backgroundColor: '#7b4e80',
    flex: 1
    

  },
  name: {
    
  
  },
  phoneNumber: {

  }
})

export default CallingScreen
