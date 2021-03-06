import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import contacts from './assets/data/contacts.json'


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

const styles = StyleSheet.create({
  page: {
    padding: 15
  },

  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0'
  }
})

export default ContactsScreen
