import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import CallingScreen from '../screens/CallingScreen/index';
// import IncomingCallScreen from '../screens/IncomingCallScreen'
import ContactsScreen from '../screens/ContactsScreen/index';


const index = () => {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Contacts' component={ContactsScreen} />

      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default index
