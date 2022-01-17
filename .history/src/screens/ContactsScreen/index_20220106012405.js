import React from 'react'
import { View } from 'react-native'

const ContactsScreen = () => {
  return (
    <View style={styles.page}>
        <FlatList 
          data = {contacts} 
          renderItem={({item}) => (
            <Text style={styles.contactName}>{item.user_display_name}</Text>)} 
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />

      </View>
  )
}

export default ContactsScreen
