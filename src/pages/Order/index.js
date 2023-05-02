import React from 'react'

import Header from '../../Components/Header'
import OrderList from '../../Components/Orders/list'

export default function Order() {
  return (
    <>
      <Header title="Orders" />

      <OrderList />
    </>
  )
}
