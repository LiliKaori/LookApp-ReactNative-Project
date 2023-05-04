import {useNavigation} from '@react-navigation/native'
import PropTypes from 'prop-types'
import React, {useContext, useEffect, useState} from 'react'
import {StretchyScrollView} from 'react-native-stretchy'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {Box, Button, Spacer, Text, Title, Touchable} from '../../Components'
import Header from '../../Components/Header'
import Picker from '../../Components/Picker'
import {AppContext} from '../../contexts/app'
import {colors} from '../../Styles/theme.json'
import util from '../../util'

export default function Product({route}) {
  const navigation = useNavigation()
  const {product} = route?.params
  const {addToCart} = useContext(AppContext)
  const [size, setSize] = useState()

  useEffect(() => {
    setSize(product?.size?.[0].value)
  }, [product])

  return (
    <>
      <Header
        title={product?.title}
        goBack
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

      <StretchyScrollView
        image={{
          uri: product?.cover,
        }}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)}></Box>}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              ${product?.price}
            </Title>
          </Box>
        }>
        <Box hasPadding background="light">
          <Text color="black">{product?.type}</Text>
          <Spacer size="20px" />
          <Title color="black">{product?.title}</Title>
          <Spacer size="30px" />
          <Text color="dark">{product?.description}</Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={product?.sizes}
            initialValue={product?.sizes?.[0]?.value}
            onChange={value => setSize(value)}
          />
          <Spacer size="30px" />

          <Button
            block
            onPress={() => {
              addToCart({...product, size})
              navigation.navigate('Cart')
            }}>
            <Text color="light">Add to Cart</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  )
}

Product.propTypes = {
  route: PropTypes.object,
}
