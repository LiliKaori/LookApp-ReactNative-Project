import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Text, View} from 'react-native'

import {Title} from '../../Components'

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Title>Components</Title>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Oi, sou a home!</Text>

      <StatusBar style="auto" />
    </View>
  )
}
