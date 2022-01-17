import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CallActionBox from '../../components/CallActionBox'

const CallingScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const user = route?.params?.user
  
  const goBack = () => {
    navigation.goBack()
  }

  
  return (
    <View style={styles.page}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name='chevron-back' color='white' size={25} />
      </Pressable>
      
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10
  }
})

export default CallingScreen
