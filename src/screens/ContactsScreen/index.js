import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Voximplant } from 'react-native-voximplant'
import baseContacts from '../../../assets/data/contacts.json'

const ContactsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredContacts, setFilteredContacts] = useState(baseContacts)

  const navigation = useNavigation()

  const voximplant = Voximplant.getInstance()

  useEffect(() => {
    voximplant.on(Voximplant.ClientEvents.IncomingCall, incomingCallEvent => {
      navigation.navigate('IncomingCall', { call: incomingCallEvent.call })

      return () => {
        voximplant.off(Voximplant.ClientEvents.IncomingCall)
      }
    })
  }, [])

  useEffect(() => {
    const newContacts = baseContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    )
    setFilteredContacts(newContacts)
  }, [searchTerm])

  const callUser = user => {
    navigation.navigate('Calling', { user })
  }

  return (
    <View style={styles.page}>
      <TextInput
        v
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
        placeholder="Search..."
      />
      <FlatList
        data={filteredContacts}
        renderItem={({ item }) => (
          <Pressable onPress={() => callUser(item)}>
            <Text style={styles.contactName}>{item.user_display_name}</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
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
