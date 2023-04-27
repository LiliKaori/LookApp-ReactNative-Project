import React from 'react'
import {StatusBar} from 'react-native'

import {Box, ScrollView, Spacer} from '../../Components'
import Header from '../../Components/Header'
import PostsList from '../../Components/Posts/list'
import StoriesList from '../../Components/Stories/list'

export function Feed() {
  return (
    <Box background="light">
      <Header title="Explore" />
      <ScrollView>
        <StoriesList />
        <Spacer />
        <PostsList />
      </ScrollView>

      <StatusBar style="auto" />
    </Box>
  )
}
