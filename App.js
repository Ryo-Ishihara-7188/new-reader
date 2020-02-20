// Modules
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
  },
})

// View
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>
            私は今日よほどこの発音めというはずのためを出ですなけれ。けっして前が話帰りはもうそんなろかううまでが強いるからいんでは抑圧出るですますて、それほどにはするだろたですです。国家が歩いうことも万十月をついにでしますでし。
          </Text>
          <Text>React News</Text>
        </View>
      </View>
    </View>
  )
}
