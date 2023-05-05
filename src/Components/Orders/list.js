import PropTypes from 'prop-types'
import React from 'react'

import {ScrollView} from '..'

import Orders from '.'

export default function OrderList({orders}) {
  return (
    <ScrollView fluid background="light" hasPadding>
      {orders?.map(order => (
        <Orders key={order.id} order={order} />
      ))}
    </ScrollView>
  )
}

OrderList.propTypes = {
  orders: PropTypes.array,
}
