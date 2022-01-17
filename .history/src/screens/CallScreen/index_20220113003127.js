import React from 'react'
import { StyleSheet, View } from 'react-native'
import CallActionBox from '../../components/CallActionBox'

const CallScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>

        <View></View>

      </View>



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
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})
export default CallScreen
