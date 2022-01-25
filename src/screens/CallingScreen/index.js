import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Voximplant } from 'react-native-voximplant'
import CallActionBox from '../../components/CallActionBox'

const permissions = [
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  PermissionsAndroid.PERMISSIONS.CAMERA,
]

const CallingScreen = () => {
  const [permissionGranted, setPermissionGranted] = useState(false)
  const [callStatus, setCallStatus] = useState('Initializing')

  const navigation = useNavigation()
  const route = useRoute()

  const user = route?.params?.user

  const voximplant = Voximplant.getInstance()

  const call = useRef()

  const goBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    const getPermissions = async () => {
      const granted = await PermissionsAndroid.requestMultiple(permissions)
      const recordAudioGranted =
        granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted'
      const cameraGranted =
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted'
      if (!cameraGranted || !recordAudioGranted) {
        Alert.alert('Permissions not granted')
      } else {
        // setPermissionGranted(true)
      }
    }
    if (Platform.OS === 'android') {
      getPermissions()
    } else {
      setPermissionGranted(true)
    }
  }, [])

  useEffect(() => {
    if (!permissionGranted) {
      return
    }

    const callSettings = {
      video: {
        sendVideo: true,
        receiveVideo: true,
      },
    }

    const makeCall = async () => {
      call.current = await voximplant.call(user.user_name, callSettings)
      subscribeToCallEvents()
    }

    const subscribeToCallEvents = () => {
      call.current(Voximplant.CallEvents.Failed, callEvent => {
        showError(callEvent.reason)
      })
      call.current(Voximplant.CallEvents.ProgressToneStart, callEvent => {
        setCallStatus('Calling...')
      })
      call.current(Voximplant.CallEvents.Connected, callEvent => {
        setCallStatus('Connected')
      })
      call.current(Voximplant.CallEvents.Disconnected, callEvent => {
        navigation.navigate('Contacts')
      })
    }
    const showError = reason => {
      Alert.alert('Call failed', `Reason: ${reason}`, [
        {
          text: 'Ok',
          onPress: navigation.navigate('Contacts'),
        },
      ])
    }
    makeCall()

    return () => {
      call.current.off(Voximplant.CallEvents.Failed)
      call.current.off(Voximplant.CallEvents.ProgressToneStart)
      call.current.off(Voximplant.CallEvents.Connected)
      call.current.off(Voximplant.CallEvents.Disconnected)
    }
  }, [permissionGranted])

  const onHangupPress = () => {
    call.current.hangup()
  }

  return (
    <View style={styles.page}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={25} />
      </Pressable>

      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.phoneNumber}>{callStatus}</Text>
      </View>

      <CallActionBox onHangupPress={onHangupPress} />
    </View>
  )
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
