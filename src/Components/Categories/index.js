import React from 'react'

import {colors} from '../../Styles/theme.json'
import util from '../../util'

import {useNavigation} from '@react-navigation/native'
import PropTypes from 'prop-types'

import {Box, Text, Touchable, Cover, Title, Spacer} from '..'

export default function Categories({category}) {
  const {navigate} = useNavigation()
  return (
    <Touchable
      onPress={() => navigate('Category', {category})}
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0">
      <Cover width="100%" height="100%" image={category.cover}>
        <Box
          width="100%"
          justify="center"
          align="center"
          hasPadding
          background={util.toAlpha(colors.black, 50)}>
          <Title color="light" bold>
            {category.title}
          </Title>
          <Spacer />
          <Text color="light">{category?.items} ITEMS</Text>
        </Box>
      </Cover>
    </Touchable>
  )
}

Categories.propTypes = {
  category: PropTypes.object,
}
