import AsyncStorage from '@react-native-async-storage/async-storage'
import {StatusBar} from 'expo-status-bar'
import PropTypes from 'prop-types'
import React, {useContext, useState} from 'react'

import {Box, Title, Button, Spacer, Text, Input} from '../../Components'
import {AppContext} from '../../contexts/app'
import api from '../../services/api'

export function SignIn({navigation}) {
  const {setUser: setUSerContext} = useContext(AppContext)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const requestLogin = async () => {
    try {
      if (user.email?.length === 0 || user.password?.length === 0) {
        alert('Fill all field')
        return false
      }
      const {data: users} = await api.get('/users', {
        params: {
          email: user.email?.toLowerCase(),
          password: user.password,
        },
      })

      const [loggedUser] = users
      if (!loggedUser) {
        alert('User not found')
        return false
      }
      // STORE IN DEVICE
      await AsyncStorage.setItem('@user', JSON.stringify(loggedUser))

      // PUT USER IN CONTEXT
      setUSerContext(loggedUser)

      // GO TO FEED
      navigation.replace('Feed')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <Box justify="center" background="light" hasPadding align="center">
      <Title variant="big" bold>
        LOOKAPP
      </Title>

      <Spacer size="50px" />

      <Title bold>SignIn my account.</Title>

      <Spacer size="50px" />

      <Input
        placeholder="E-mail"
        value={user.email}
        onChangeText={email => setUser({...user, email})}
      />
      <Spacer />
      <Input
        placeholder="Password"
        secureTextEntry
        value={user.password}
        onChangeText={password => setUser({...user, password})}
      />

      <Spacer size="50px" />

      <Button block onPress={() => requestLogin()}>
        <Text color="light">SignIn into my account</Text>
      </Button>

      <Spacer size="20px" />

      <Text underline onPress={() => navigation.navigate('SignUp')}>
        Create new account
      </Text>

      <StatusBar style="auto" />
    </Box>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.object,
}
