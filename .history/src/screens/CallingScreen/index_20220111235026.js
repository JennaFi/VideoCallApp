import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Jenna</Text>
        <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>
      </View>
       <View style={styles.buttonsContainer}>
          <Text>Icons</Text>
        </View>

      
    </View>)
}



const styles = StyleSheet.create({
  page: {
    height: '100%'

  },
  cameraPreview: {
    backgroundColor: '#7b4e80',
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

    backgroundColor: '#333333',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    marginTop: 'auto'
  }
})

export default CallingScreen
