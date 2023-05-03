import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from '@react-navigation/native'
import {StatusBar} from 'expo-status-bar'
import React, {useContext, useState} from 'react'
import {ActivityIndicator} from 'react-native'

import {Box, Title, Button, Spacer, Text, Input} from '../../Components'
import {AppContext} from '../../contexts/app'
import api from '../../services/api'

export function SignUp() {
  const {setUser: setUSerContext} = useContext(AppContext)
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const requestSignUp = async () => {
    try {
      setLoading(true)

      if (
        user.email?.length === 0 ||
        user.name?.length === 0 ||
        user?.password?.length === 0
      ) {
        alert('Fill all field')
        return false
      }

      const {data: loggedUser} = await api.post('/users', user)

      if (!loggedUser) {
        setLoading(false)
        alert('Não foi possível criar o usuário')
        return false
      }

      await AsyncStorage.setItem('@user', JSON.stringify(loggedUser))
      setUSerContext(loggedUser)
      navigation.replace('Feed')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <Box justify="center" background="light" hasPadding align="center">
      <Title bold>Create new account.</Title>
      <Spacer />
      <Text align="center" spacing="0px 40px">
        Enter your details below:
      </Text>
      <Spacer size="50px" />

      <Input
        placeholder="Name"
        editable={!loading}
        value={user.name}
        onChangeText={name => setUser({...user, name})}
      />
      <Spacer />
      <Input
        placeholder="E-mail"
        editable={!loading}
        value={user.email}
        onChangeText={email => setUser({...user, email: email?.toLowerCase()})}
      />
      <Spacer />
      <Input
        placeholder="Password"
        editable={!loading}
        secureTextEntry
        value={user.password}
        onChangeText={password => setUser({...user, password})}
      />

      <Spacer size="50px" />

      {loading && <ActivityIndicator size="large" />}

      {!loading && (
        <>
          <Button block onPress={() => requestSignUp()}>
            <Text color="light">Create new account</Text>
          </Button>
          <Spacer size="20px" />
          <Text underline onPress={() => navigation.navigate('SignIn')}>
            Back to signIn
          </Text>
        </>
      )}

      <StatusBar style="auto" />
    </Box>
  )
}
