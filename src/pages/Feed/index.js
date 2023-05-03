import {useNavigation} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {StatusBar} from 'react-native'

import {Box, ScrollView, Spacer} from '../../Components'
import Empty from '../../Components/Empty'
import Header from '../../Components/Header'
import PostsList from '../../Components/Posts/list'
import StoriesList from '../../Components/Stories/list'
import api from '../../services/api'

export function Feed() {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  const [feed, setFeed] = useState({
    stories: [],
    posts: [],
  })

  const getFeed = async () => {
    try {
      const {data: feedData} = await api.get('/feed')
      setFeed(feedData)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      alert(err.message)
    }
  }

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      getFeed()
    })
    return unSubscribe
  }, [navigation])

  return (
    <Box background="light">
      <Header title="Explore" />
      {loading ? (
        <Empty message="Erro ao carregar o feed" />
      ) : (
        <ScrollView>
          <StoriesList stories={feed?.stories} />
          <Spacer />
          <PostsList posts={feed?.posts} />
        </ScrollView>
      )}

      <StatusBar style="auto" />
    </Box>
  )
}
