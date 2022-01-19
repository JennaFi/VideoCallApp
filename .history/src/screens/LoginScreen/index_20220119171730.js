import React, { useEffect, useState } from 'react'
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { Voximplant } from 'react-native-voximplant'
import { ACC_NAME, APP_NAME } from '../../constants'

const LoginScreen = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const voximplant = Voximplant.getInstance()

  useEffect(() => {
    const connect = async () => {
      const status = await voximplant.getClientState()
      if (status === Voximplant.ClientState.DISCONNECTED) {
        await voximplant.connect()
      }
    }
    connect()
  }, [])

  const signIn = async () => {
    try {
      const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`
      await voximplant.login(fqUsername, password)
    } catch (error) {
      console.log(error)
      Alert.alert(error.name, `Error code: ${error.code}`)
    }
  }

  return (
    <View style={styles.page}>
      <TextInput
        value={userName}
        onChangeText={setUserName}
        placeholder="username"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        style={styles.input}
        secureTextEntry
      />

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
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'dodgerblue',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
})

export default LoginScreen
