import {useNavigation} from '@react-navigation/native'
import PropTypes from 'prop-types'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {Touchable} from '../../Components'
import Empty from '../../Components/Empty'
import Header from '../../Components/Header'
import ProductList from '../../Components/Products/list'
import api from '../../services/api'

export default function Category({route}) {
  const navigation = useNavigation()
  const {category} = route?.params
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const {data: productData} = await api.get('/products', {
        params: {
          categoryId: category?.id,
        },
      })
      setProducts(productData)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      alert(err.message)
    }
  }

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      getProducts()
    })
    return unSubscribe
  }, [navigation])

  return (
    <>
      <Header
        title={category?.title}
        right={() => (
          <Touchable
            width="70px"
            hasPadding
            justify="center"
            align="center"
            onPress={() => navigation.navigate('Cart')}>
            <Icon name="bag" size={20}></Icon>
          </Touchable>
        )}
      />
      {loading ? <Empty loading /> : <ProductList products={products} />}
    </>
  )
}

Category.propTypes = {
  route: PropTypes.object,
}
