import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {Touchable} from '../../Components'
import Header from '../../Components/Header'
import ProductList from '../../Components/Products/list'

export default function Category() {
  return (
    <>
      <Header
        title="Categoria X"
        right={() => (
          <Touchable
            width="70px"
            hasPadding
            justify="center"
            align="center"
            onPress={() => alert('teste')}>
            <Icon name="bag" size={20}></Icon>
          </Touchable>
        )}
      />
      <ProductList />
    </>
  )
}
