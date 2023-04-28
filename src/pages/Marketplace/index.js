import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {Touchable, Box, Title} from '../../Components'
import Header from '../../Components/Header'

export default function Marketplace() {
  return (
    <>
      <Header
        title="Categories"
        right={() => (
          <Touchable
            width="80px"
            justify="center"
            align="center"
            onPress={() => alert('teste')}>
            <Icon name="bag" size={20}></Icon>
          </Touchable>
        )}
      />
      <Box>
        <Title>Marketplace</Title>
      </Box>
    </>
  )
}
