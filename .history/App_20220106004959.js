/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react'
import {
  FlatList,
  SafeAreaView, StatusBar,
  StyleSheet,
  Text
} from 'react-native'


const contacts = ['Jenna', 'Viki', 'Emma']


const App = () => {
 

  return (
    <SafeAreaView >
      <StatusBar barStyle={'dark-content'} />
      <FlatList data = {contacts} renderItem={({item}) => (<Text>{item}</Text>)}/>
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})

export default App
