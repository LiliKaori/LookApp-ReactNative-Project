import {StatusBar} from 'expo-status-bar'
import React from 'react'

import {Box, Title, Button, Spacer, Text, Input} from '../../Components'

export function SignIn() {
  return (
    <Box justify="center" background="light" hasPadding align="center">
      <Title variant="big" bold>
        LOOKAPP
      </Title>

      <Spacer size="50px" />

      <Title bold>SignIn my account.</Title>

      <Spacer size="50px" />

      <Input placeholder="E-mail" />
      <Spacer />
      <Input placeholder="Password" secureTextEntry />

      <Spacer size="50px" />

      <Button block>
        <Text color="light">SignIn into my account</Text>
      </Button>

      <Spacer size="20px" />

      <Text underline onPress={() => alert('teste')}>
        Create new account
      </Text>

      <StatusBar style="auto" />
    </Box>
  )
}
