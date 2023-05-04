import {useNavigation} from '@react-navigation/native'
import PropTypes from 'prop-types'
import React, {useContext} from 'react'

import {Text, Box, Touchable, Cover, Spacer} from '..'

import {Alert} from 'react-native'

import {AppContext} from '../../contexts/app'

export default function Products({product, selected = false}) {
  const {navigate} = useNavigation()
  const {removeToCart} = useContext(AppContext)

  return (
    <Touchable
      onPress={() => {
        if (!selected) {
          navigate('Product', {product})
        } else {
          Alert.alert(
            'Sure about that?',
            'This product will be removed from your cart',
            [
              {text: 'Cancel', style: 'cancel'},
              {
                text: 'Remove',
                style: 'destructive',
                onPress: () => removeToCart(product?.id),
              },
            ]
          )
        }
      }}
      hasPadding={!selected}
      row
      background="light"
      spacing={selected ? '5px 0' : '0 0 1px 0'}>
      <Cover width="80px" height="80px" image={product?.cover} />
      <Box hasPadding style={{paddingBottom: 0, paddingTop: 0}}>
        {!selected && <Text color="dark">{product.brand}</Text>}
        <Text color="dark" bold>
          {product?.title}
        </Text>
        <Spacer />
        {selected && (
          <Box>
            <Text color="dark">Size: {product?.size}</Text>
          </Box>
        )}
        <Box row width="100%" justify="space-between">
          <Text color="dark">{product?.price}</Text>

          <Text color="danger"> {selected ? 'Remove' : 'Add to cart'}</Text>
        </Box>
      </Box>
    </Touchable>
  )
}

Products.propTypes = {
  product: PropTypes.object,
  selected: PropTypes.bool,
  onRemove: PropTypes.func,
}
