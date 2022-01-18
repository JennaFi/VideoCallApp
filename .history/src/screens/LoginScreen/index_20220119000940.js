import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {
  const signIn = () => {}

  return (
    <View style={styles.page}>
      <TextInput placeholder='username' style={styles.input} />
      <TextInput placeholder='password' style={styles.input} />

      <Pressable style={styles.button} onPress={signIn}> 
        <Text>Sign in</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: 'dodgerblue',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5

  }

})

export default LoginScreen
