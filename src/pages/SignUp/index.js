import {StatusBar} from 'expo-status-bar'
import React from 'react'

import {Box, Title, Button, Spacer, Text, Input} from '../../Components'

export function SignUp() {
  return (
    <Box justify="center" background="light" hasPadding align="center">
      <Title bold>Create new account.</Title>
      <Spacer />
      <Text align="center" spacing="0px 40px">
        Enter your details below:
      </Text>
      <Spacer size="50px" />

      <Input placeholder="Name" />
      <Spacer />
      <Input placeholder="E-mail" />
      <Spacer />
      <Input placeholder="Password" secureTextEntry />

      <Spacer size="50px" />
      <Button block>
        <Text color="light">Create new account</Text>
      </Button>
      <Spacer size="20px" />
      <Text underline onPress={() => alert('teste')}>
        Back to signIn
      </Text>

      <StatusBar style="auto" />
    </Box>
  )
}
