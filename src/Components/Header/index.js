import PropTypes from 'prop-types'
import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Box, Title, Touchable} from '../../Components'
import {colors} from '../../Styles/theme.json'

export default function Header({title}) {
  return (
    <>
      <StatusBar barStyle="default" />
      <Box
        fluid
        height="100px"
        justify="center"
        border={`1px solid ${colors.muted}50`}>
        <SafeAreaView style={{flexDirection: 'row'}}>
          <Touchable
            width="80px"
            justify="center"
            align="center"
            onPress={() => alert('teste')}>
            <Icon name="menu" size={20} />
          </Touchable>
          <Box align="center" justify="center">
            <Title>{title}</Title>
          </Box>
          <Touchable width="80px"></Touchable>
        </SafeAreaView>
      </Box>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}