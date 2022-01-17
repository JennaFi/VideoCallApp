import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import bg from '../../../assets/images/ios_bg.png'

const IncomingCallScreen= () => {
  return (
    <View style={styles.root}>
      <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
        <Text style={styles.name}>Jenna</Text>
        <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>
      </ImageBackground>
      
    </View>
  )
}



const styles = StyleSheet.create({
  root: {
    height: '100%'
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
  bg: {
    flex: 1

  }

})

export default IncomingCallScreen
