import AsyncStorage from '@react-native-async-storage/async-storage'
import {StatusBar} from 'expo-status-bar'
import PropTypes from 'prop-types'
import React, {useContext, useEffect, useState} from 'react'
import {ActivityIndicator} from 'react-native'

import {Box, Title, Button, Spacer, Text} from '../../Components'
import {AppContext} from '../../contexts/app'

export function Home({navigation}) {
  const [loading, setLoading] = useState(true)
  const {setUser} = useContext(AppContext)

  const checkLogged = async () => {
    // AsyncStorage.clear()
    setLoading(true)

    const loggedUser = await AsyncStorage.getItem('@user')
    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
      navigation.replace('Feed')
    } else {
      setLoading(false)
    }
  }
  useEffect(() => {
    checkLogged()
  }, [])

  return (
    <Box justify="center" fluid background="dark" hasPadding align="center">
      <Box justify="center" align="center">
        <Title color="light" variant="big" bold>
          LOOKAPP
        </Title>
        <Spacer />
        <Text align="center" spacing="0px 40px">
          Stay on top of the fashion world and buy your favorite looks.
        </Text>
        {loading && (
          <>
            <Spacer size="40px" />
            <ActivityIndicator size="large" />
          </>
        )}
      </Box>

      {!loading && (
        <Box justify="flex-end" fluid align="center">
          <Button block onPress={() => navigation.navigate('SignIn')}>
            <Text color="light">SignIn my account</Text>
          </Button>
          <Spacer size="20px" />
          <Text underline color="light" onPress={() => alert('teste')}>
            Create new account
          </Text>
          <Spacer size="70px" />
        </Box>
      )}

      <StatusBar style="inverted" />
    </Box>
  )
}

Home.propTypes = {
  navigation: PropTypes.object,
}
