import React, {useContext, useState} from 'react'

import {Box, Button, ScrollView, Spacer, Text, Title} from '../../Components'
import PaymentForm from '../../Components/Forms/payment'
import Header from '../../Components/Header'
import CongratsModal from '../../Components/Modals/congrats'
import Products from '../../Components/Products'
import Tabs from '../../Components/Tabs'
import {AppContext} from '../../contexts/app'
import {colors} from '../../Styles/theme.json'
import util from '../../util'

export default function Cart() {
  const {cart} = useContext(AppContext)
  const [showCongrats, setShowCongrats] = useState(false)
  const [tab, setTab] = useState('cart')

  return (
    <>
      {showCongrats && <CongratsModal />}
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
      <ScrollView hasPadding background="light">
        <Spacer size="20px" />
        <Title variant="small">Order number is 458765342</Title>
        <Spacer size="20px" />
        {tab === 'cart' && (
          <>
            {cart?.map(product => (
              <Products key={product.id} product={product} selected />
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
            <Spacer size="20px" />
            <Box
              row
              width="100%"
              justify="space-between"
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: util.toAlpha(colors.muted, 50),
                paddingBottom: 10,
              }}>
              <Text color="dark" bold>
                Shipping andress
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Spacer />
            <Text color="dark">
              Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495
              United States
            </Text>
            <Spacer size="30px" />
            <Box
              row
              width="100%"
              justify="space-between"
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: util.toAlpha(colors.muted, 50),
                paddingBottom: 10,
              }}>
              <Text color="dark" bold>
                Delivery details
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Spacer />
            <Text color="dark">Standard Delivery</Text>
            <Text color="dark">Saturday 27 - Tuesday 30</Text>
            <Text color="dark">Cost: $10</Text>
            <Spacer size="30px" />
            <PaymentForm
              onChange={creditCardData => console.log(creditCardData)}
            />

            <Button block onPress={() => setShowCongrats(true)}>
              <Text color="light">Confirmation</Text>
            </Button>
          </>
        )}

        <Spacer size="50px" />
      </ScrollView>
    </>
  )
}
