import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import bg from '../../../assets/images/ios_bg.png'

const IncomingCallScreen= () => {
  return (
   
    <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
      <Text style={styles.name}>Jenna</Text>
      <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>

      <View style={styles.row}>
        <View style={styles.iconsContainer}>
          <Ionicons name='alarm' color='white' size={30} />
          <Text style={styles.iconText}>Remind me</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Entypo name='message' color='white' size={30} />
          <Text style={styles.iconText}>Message</Text>
        </View>
      </View>
      
      <View style={styles.row} st>
        <View style={styles.iconsContainer}>
          <View style={styles.iconButtonContainer}>
            <Feather name='x' color='white' size={50} />
          </View>
         
          <Text style={styles.iconText}>Decline</Text>
        </View>

        <View style={styles.iconsContainer}>
          <View style={styles.iconButtonContainer}>
            <Feather name='check' color='white' size={50} />
          </View>
          
          <Text style={styles.iconText}>Accept</Text>
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

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',


  },
  iconsContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  iconText: {
    color: 'white',
    marginTop: 10
  },
  iconButtonContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50
  }

})

export default IncomingCallScreen
