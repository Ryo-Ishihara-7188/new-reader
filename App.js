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
      <ListItem
        imageUrl="https://facebook.github.io/react/logo-og.png"
        title="私は今日よほどこの発音めというはずのためを出ですなけれ。けっして前が話帰りはもうそんなろかううまでが強いるからいんでは抑圧出るですますて、それほどにはするだろたですです。国家が歩いうことも万十月をついにでしますでし。"
        author="Rreact News"
      />
      <ListItem
        imageUrl="https://facebook.github.io/react/logo-og.png"
        title="私は今日よほどこの発音めというはずのためを出ですなけれ。けっして前が話帰りはもうそんなろかううまでが強いるからいんでは抑圧出るですますて、それほどにはするだろたですです。国家が歩いうことも万十月をついにでしますでし。"
        author="Rreact News"
      />
      <ListItem
        imageUrl="https://facebook.github.io/react/logo-og.png"
        title="私は今日よほどこの発音めというはずのためを出ですなけれ。けっして前が話帰りはもうそんなろかううまでが強いるからいんでは抑圧出るですますて、それほどにはするだろたですです。国家が歩いうことも万十月をついにでしますでし。"
        author="Rreact News"
      />
    </View>
  )
}
