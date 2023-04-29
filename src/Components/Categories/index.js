import React from 'react'

import {colors} from '../../Styles/theme.json'
import util from '../../util'

import {useNavigation} from '@react-navigation/native'
import PropTypes from 'prop-types'

import {Box, Text, Touchable, Cover, Title, Spacer} from '..'

export default function Categories({title, description}) {
  const {navigate} = useNavigation()
  return (
    <Touchable
      onPress={() => navigate('Category')}
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0">
      <Cover
        width="100%"
        height="100%"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU">
        <Box
          width="100%"
          justify="center"
          align="center"
          hasPadding
          background={util.toAlpha(colors.black, 50)}>
          <Title color="light" bold>
            {title}
          </Title>
          <Spacer />
          <Text color="light">{description}</Text>
        </Box>
      </Cover>
    </Touchable>
  )
}

Categories.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
