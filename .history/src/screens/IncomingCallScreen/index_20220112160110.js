import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import bg from '../../../assets/images/ios_bg.png'

const IncomingCallScreen= () => {
  return (
    <View style={styles.root}>
      <Image source={bg} style={styles.bg} resizeMode='cover'/>
      <Text style={styles.name}>Jenna</Text>
      <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>
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
    width: '100%',
    height: '100%'

  }

})

export default IncomingCallScreen
