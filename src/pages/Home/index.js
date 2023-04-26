import {StatusBar} from 'expo-status-bar'
import React from 'react'

import {Box, Title, Button, Spacer, Text} from '../../Components'

export default function Home() {
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
      </Box>

      <Box justify="flex-end" fluid align="center">
        <Button block>
          <Text>SignIn my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline color="light" onPress={() => alert('teste')}>
          Create new account
        </Text>
        <Spacer size="70px" />
      </Box>

      <StatusBar style="auto" />
    </Box>
  )
}
