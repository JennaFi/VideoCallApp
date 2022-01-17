import React from 'react'
import { StyleSheet, View } from 'react-native'
import CallActionBox from '../../components/CallActionBox'

const CallScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview} />

     

      



      <CallActionBox />
    </View>
  )
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#7b4e80'
  },
  cameraPreview: {
    // flex: 1,
    // alignItems: 'center',
    // paddingTop: 10,
    // paddingHorizontal: 10
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})
export default CallScreen
