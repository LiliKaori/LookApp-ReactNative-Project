import {useNavigation} from '@react-navigation/native'
import React, {useContext, useState, useEffect} from 'react'

import Empty from '../../Components/Empty'
import Header from '../../Components/Header'
import OrderList from '../../Components/Orders/list'
import {AppContext} from '../../contexts/app'
import api from '../../services/api'

export default function Order() {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState([])
  const {user} = useContext(AppContext)

  const getOrders = async () => {
    try {
      setLoading(true)
      const {data: ordersData} = await api.get('/orders', {
        params: {
          userId: user?.id,
        },
      })
      setOrders(ordersData)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      alert(err.message)
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getOrders()
    })
    return unsubscribe
  }, [navigation])

  return (
    <>
      <Header title="Orders" />
      {loading && <Empty loading />}
      {!loading && <OrderList orders={orders} />}
    </>
  )
}
