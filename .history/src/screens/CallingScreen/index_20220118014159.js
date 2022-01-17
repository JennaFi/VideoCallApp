import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CallActionBox from '../../components/CallActionBox'

const CallingScreen = () => {

  
  return (
    <View style={styles.page}>
      <Ionicons name='chevron-back' color='white' size='20' />
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Jenna</Text>
        <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>
      </View>
      
      <CallActionBox />
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
  
})

export default CallingScreen
