import {useNavigation} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {Touchable} from '../../Components'
import CategoryList from '../../Components/Categories/list'
import Empty from '../../Components/Empty'
import Header from '../../Components/Header'
import api from '../../services/api'

export default function Marketplace() {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])

  const getCategory = async () => {
    try {
      const {data: categoryData} = await api.get('/categories')
      setCategories(categoryData)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      alert(err.message)
    }
  }

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      getCategory()
    })
    return unSubscribe
  }, [navigation])

  return (
    <>
      <Header
        title="Categories"
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
      {loading ? (
        <Empty message="Erro ao carregar o feed" />
      ) : (
        <CategoryList categories={categories} />
      )}
    </>
  )
}
