import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import util from '../../util'
import {colors} from '../../Styles/theme.json'

import {Box, Text, Title} from '..'

export default function Orders({order}) {
  const stepEnum = {
    waiting: {
      icon: 'clock',
      color: 'warning',
    },
    delivered: {
      icon: 'check',
      color: 'success',
    },
    canceled: {
      icon: 'close',
      color: 'danger',
    },
  }

  const stepData = stepEnum[order?.step]
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
          <Icon name={stepData.icon} size={20} color={colors[stepData.color]} />
          <Text color={stepData.color} spacing="0 0 0 10px">
            {order?.step?.toUpperCase()}
          </Text>
        </Box>
        <Text>{moment(order?.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
      </Box>
      <Box
        hasPadding
        width="100%"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: util.toAlpha(colors.muted, 50),
        }}>
        <Title>Order Nº{order?.orderNumber}</Title>
        <Text>
          Tracking number: <Text color="dark">{order?.trackingNumber}</Text>
        </Text>
      </Box>
      <Box hasPadding row justify="space-between" width="100%">
        <Text>
          VALUE ORDER: <Text color="dark">${order?.totalValue.toFixed(2)}</Text>
        </Text>
        <Text>
          QUANTITY: <Text color="dark">{order?.totalItems}</Text>
        </Text>
      </Box>
    </Box>
  )
}

Orders.propTypes = {
  order: PropTypes.object,
}
