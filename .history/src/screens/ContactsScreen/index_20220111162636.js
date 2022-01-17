import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import contacts from '../../../assets/data/contacts.json'


const ContactsScreen = () => {

  const [searchTerm, setSearchTerm] = useState('')
  return (
    <View style={styles.page}>
      <TextInput value={searchTerm} onChangeText={setSearchTerm} style={styles.searchInput} placeholder='Search...' />
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
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,

  }
})

export default ContactsScreen
