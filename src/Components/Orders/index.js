import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import util from '../../util'
import {colors} from '../../Styles/theme.json'

import {Box, Text, Title} from '..'

export default function Orders() {
  return (
    <Box
      hasPadding
      radius="5px"
      spacing="0 0 10px 0"
      border={`1px solid ${util.toAlpha(colors.muted, 50)}`}>
      <Box
        hasPadding
        row
        justify="space-between"
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}>
        <Box row align="center">
          <Icon name="check" size={20} color={colors.success} />
          <Text color="success" spacing="0 0 0 10px">
            DELIVERED
          </Text>
        </Box>
        <Text>August 17, 2016 3:58 PM</Text>
      </Box>
      <Box
        hasPadding
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}>
        <Title>Orders Nº947034</Title>
        <Text>
          Tracking number: <Text color="dark">Nº947034</Text>
        </Text>
      </Box>
      <Box hasPadding row justify="space-between" width="100%">
        <Text>
          VALUE OF ITEMS: <Text color="dark">$66.60</Text>
        </Text>
        <Text>
          QUANTITY: <Text color="dark">3</Text>
        </Text>
      </Box>
    </Box>
  )
}
