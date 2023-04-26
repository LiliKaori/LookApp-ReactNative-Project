import React from 'react'
import {StatusBar} from 'react-native'

import {Box, Text} from '../../Components'
import Header from '../../Components/Header'

export default function Feed() {
  return (
    <Box background="light">
      <Header title="Explore" />
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <StatusBar style="auto" />
    </Box>
  )
}
