import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import bg from '../../../assets/images/ios_bg.png'

const IncomingCallScreen = () => {
  const onDecline = () => {
    console.warn('onDecline')
  }
  const onAccept = () => {
    console.warn('onAccept')
  }

  return (
   
    <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
      <Text style={styles.name}>Jenna</Text>
      <Text style={styles.phoneNumber}>ringing +34 667 778 887</Text>

      <View style={[styles.row, {marginTop: 'auto'}]}>
        <View style={styles.iconsContainer}>
          <Ionicons name='alarm' color='white' size={30} />
          <Text style={styles.iconText}>Remind me</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Entypo name='message' color='white' size={30} />
          <Text style={styles.iconText}>Message</Text>
        </View>
      </View>
      
      <View style={styles.row}>
        {/* decline button */}
        <Pressable onPress={onDecline} style={styles.iconsContainer}>
          <View style={styles.iconButtonContainer}>
            <Feather name='x' color='white' size={50} />
          </View>
         
          <Text style={styles.iconText}>Decline</Text>
        </Pressable>
        {/* accept button */}
        <Pressable onPress={onAccept} style={styles.iconsContainer}>
          <View style={[styles.iconButtonContainer, {backgroundColor: '#3f3f'}]}>
            <Feather name='check' color='white' size={50} />
          </View>
          
          <Text style={styles.iconText}>Accept</Text>
        </Pressable>
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
    borderRadius: 50,
    margin: 10
  }

})

export default IncomingCallScreen
