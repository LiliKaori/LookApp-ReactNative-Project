import PropTypes from 'prop-types'
import React from 'react'
import {SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Box, Title} from '../../Components'
import {colors} from '../../Styles/theme.json'

export default function Header({title}) {
  return (
    <Box
      fluid
      height="100px"
      justify="center"
      border={`1px solid ${colors.muted}50`}>
      <SafeAreaView style={{flexDirection: 'row'}}>
        <Box width="80px" justify="center" align="center">
          <Icon name="menu" size={20} />
        </Box>
        <Box align="center" justify="center">
          <Title>{title}</Title>
        </Box>
        <Box width="80px"></Box>
      </SafeAreaView>
    </Box>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}
