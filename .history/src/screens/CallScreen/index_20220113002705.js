import React from 'react'
import { StyleSheet, View } from 'react-native'
import CallActionBox from '../../components/CallActionBox'

const CallScreen = () => {
  return (
    <>
      <View style={styles.cameraPreview}>

      </View>



      <CallActionBox />
    </>
  )
}


const styles = StyleSheet.create({
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10
  },
})
export default CallScreen
