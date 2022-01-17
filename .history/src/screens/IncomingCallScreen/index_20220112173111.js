import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import bg from '../../../assets/images/ios_bg.png'

const IncomingCallScreen= () => {
  return (
   
    <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
      <Text style={styles.name}>Jenna</Text>
      <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>

      <View>
        <View>
          <Ionicons name='alarm' color='white' size={30} />
          <Text>Remind me</Text>
        </View>
        <View>
          <Entypo name='message' color='white' size={30} />
          <Text>Message</Text>
        </View>
      </View>
      
      <View>
        <View>
          <Ionicons name='alarm' color='white' size={30} />
          <Text>Decline</Text>
        </View>
      </View>

      
      
      
     
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
