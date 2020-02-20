// Modules
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ListItem from './components/ListItem'

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// View
export default function App() {
  return (
    <View style={styles.container}>
      <ListItem />
    </View>
  )
}
