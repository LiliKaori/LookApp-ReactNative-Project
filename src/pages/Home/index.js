import {StatusBar} from 'expo-status-bar'
import PropTypes from 'prop-types'
import React from 'react'

import {Box, Title, Button, Spacer, Text} from '../../Components'

export function Home({navigation}) {
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
        <Button block onPress={() => navigation.navigate('SignIn')}>
          <Text>SignIn my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline color="light" onPress={() => alert('teste')}>
          Create new account
        </Text>
        <Spacer size="70px" />
      </Box>

      <StatusBar style="inverted" />
    </Box>
  )
}

Home.propTypes = {
  navigation: PropTypes.object,
}
