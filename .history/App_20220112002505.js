/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { StatusBar } from 'react-native';
import CallingScreen from './src/screens/CallingScreen/index';




const App = () => {
 

  return (
    < >
      <StatusBar barStyle={'dark-content'} />
      
      {/* <ContactsScreen /> */}
      <CallingScreen />

    </>
  )
}



export default App
