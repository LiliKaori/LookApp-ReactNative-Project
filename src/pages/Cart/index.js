import React, {useState} from 'react'

import {Box, Button, ScrollView, Spacer, Text, Title} from '../../Components'
import Header from '../../Components/Header'
import Products from '../../Components/Products'
import Tabs from '../../Components/Tabs'

export default function Cart() {
  const [tab, setTab] = useState('')
  return (
    <>
      <Header title="Cart" goBack />
      <Tabs
        tabs={[
          {label: 'Cart', value: 'cart'},
          {label: 'Payment', value: 'payment'},
          {label: 'Paymenta', value: 'paymenta'},
        ]}
        active={tab}
        onChange={value => setTab(value)}
      />
      <ScrollView background="light">
        <Spacer size="20px" />
        <Title variant="small">Order number is 458765342</Title>
        <Spacer size="20px" />
        {tab === 'cart' && (
          <>
            {Array.from(Array(3))?.map(item => (
              <Products
                key={Math.random}
                cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU"
                brand="Raf Simons"
                title="Large striped cardigan"
                price="$1080"
                selected
              />
            ))}
            <Spacer size="30px" />
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Order:</Text>
              <Text color="dark">$445.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Discount:</Text>
              <Text color="success">$-45.50</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Delivery:</Text>
              <Text color="dark">$10.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text bold color="dark">
                Total order:
              </Text>
              <Text bold color="dark">
                $410.50
              </Text>
            </Box>
            <Spacer size="30px" />
            <Button block onPress={() => setTab('payment')}>
              <Text color="light">Place Order</Text>
            </Button>
          </>
        )}
        {tab === 'payment' && (
          <>
            <Title>Payment</Title>
          </>
        )}
      </ScrollView>
    </>
  )
}
