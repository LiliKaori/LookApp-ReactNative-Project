import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {Touchable} from '../../Components'
import CategoryList from '../../Components/Category/list'
import Header from '../../Components/Header'

export default function Marketplace() {
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
            onPress={() => alert('teste')}>
            <Icon name="bag" size={20}></Icon>
          </Touchable>
        )}
      />
      <CategoryList />
    </>
  )
}
