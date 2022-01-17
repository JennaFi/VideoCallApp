import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import CallScreen from '../screens/CallScreen'

// import CallingScreen from '../screens/CallingScreen/index';
// import IncomingCallScreen from '../screens/IncomingCallScreen'

const index = () => {
  return (
    <NavigationContainer>
      <CallScreen />
    </NavigationContainer>
  )
}

export default index
