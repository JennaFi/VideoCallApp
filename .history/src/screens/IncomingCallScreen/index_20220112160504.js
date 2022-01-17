import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import bg from '../../../assets/images/ios_bg.png'

const IncomingCallScreen= () => {
  return (
   
      <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
        <Text style={styles.name}>Jenna</Text>
        <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>
      </ImageBackground>
      
  
  )
}



const styles = StyleSheet.create({
  
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 100,
    marginBottom: 15
    
  
  },
  phoneNumber: {
    fontSize: 25,
    color: 'white'

  },
  bg: {
    flex: 1,
    alignItems: 'center',
    padding: 10

  }

})

export default IncomingCallScreen
