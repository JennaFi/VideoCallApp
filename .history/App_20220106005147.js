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
  Text,
  View
} from 'react-native'


const contacts = ['Jenna', 'Viki', 'Emma']


const App = () => {
 

  return (
    <SafeAreaView >
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.page}>
              <FlatList data = {contacts} renderItem={({item}) => (<Text style={styles.contactName}>{item}</Text>)}/>

      </View>
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 10
  }
  
})

export default App
