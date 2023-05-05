import moment from 'moment'
import React, {useContext, useState} from 'react'
import {ActivityIndicator} from 'react-native'

import {Box, Button, ScrollView, Spacer, Text, Title} from '../../Components'
import Empty from '../../Components/Empty'
import PaymentForm from '../../Components/Forms/payment'
import Header from '../../Components/Header'
import CongratsModal from '../../Components/Modals/congrats'
import Products from '../../Components/Products'
import Tabs from '../../Components/Tabs'
import {AppContext} from '../../contexts/app'
import api from '../../services/api'
import {colors} from '../../Styles/theme.json'
import util from '../../util'

export default function Cart() {
  const {cart, user, discountPercentage, deliveryTax, orderNumber} =
    useContext(AppContext)
  const [showCongrats, setShowCongrats] = useState(false)
  const [loading, setLoading] = useState(false)
  const [creditCard, setCreditCard] = useState({})
  const [tab, setTab] = useState('cart')

  const cartIsEmpty = cart?.length === 0
  const orderPrice = cart?.reduce((acc, product) => {
    return (acc += product.price)
  }, 0)
  const totalDiscount = (orderPrice * discountPercentage).toFixed(2)
  const totalOrderPrice = orderPrice + deliveryTax - totalDiscount

  const buyCart = async () => {
    try {
      setLoading(true)

      const creditCardValidation = util.isValidCreditCard(creditCard)
      if (creditCardValidation.error) {
        alert(creditCardValidation.message)
        return false
      }

      const {data: orderData} = await api.post('/orders', {
        userId: user.id,
        step: 'waiting',
        createdAt: moment().format(),
        orderNumber,
        trackingNumber: new Date().getTime(),
        totalValue: totalOrderPrice,
        totalItem: cart?.length,
      })

      if (!orderData.id) {
        alert('Order creation error... try again later...')
        setLoading(false)
        return false
      }

      setShowCongrats(true)
    } catch (err) {
      setLoading(false)
      alert(err.message)
    }
  }

  return (
    <>
      {showCongrats && <CongratsModal />}
      <Header title="Cart" goBack />

      {cartIsEmpty && <Empty message="Cart is empty..." />}
      {!cartIsEmpty && (
        <>
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
            <Title variant="small">Order number is {orderNumber}</Title>
            <Spacer size="20px" />
            {tab === 'cart' && (
              <>
                {cart?.map(product => (
                  <Products key={product.id} product={product} selected />
                ))}
                <Spacer size="30px" />
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Order:</Text>
                  <Text color="dark">${orderPrice?.toFixed(2)}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Discount:</Text>
                  <Text color="success">$-{totalDiscount}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text color="dark">Delivery:</Text>
                  <Text color="dark">${deliveryTax?.toFixed(2)}</Text>
                </Box>
                <Box row width="100%" height="30px" justify="space-between">
                  <Text bold color="dark">
                    Total order:
                  </Text>
                  <Text bold color="dark">
                    ${totalOrderPrice?.toFixed(2)}
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
                  onChange={creditCardData => setCreditCard(creditCardData)}
                />

                <Button block onPress={() => buyCart()}>
                  {!loading && <Text color="light">Confirmation</Text>}
                  {loading && <ActivityIndicator />}
                </Button>
              </>
            )}

            <Spacer size="50px" />
          </ScrollView>
        </>
      )}
    </>
  )
}
