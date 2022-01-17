import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CallingScreen from '../screens/CallingScreen';
import CallScreen from '../screens/CallScreen';
// import CallingScreen from '../screens/CallingScreen/index';
// import IncomingCallScreen from '../screens/IncomingCallScreen'
import ContactsScreen from '../screens/ContactsScreen/index';
import IncomingCallScreen from '../screens/IncomingCallScreen';


const index = () => {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Contacts' component={ContactsScreen} />
        <Stack.Screen name='Call' component={CallScreen} />
        <Stack.Screen name='Calling' component={CallingScreen} />
        <Stack.Screen name='IncomingCall' component={IncomingCallScreen} />

      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default index
