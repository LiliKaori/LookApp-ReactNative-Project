import {useNavigation} from '@react-navigation/native'
import PropTypes from 'prop-types'
import React from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Box, Title, Touchable} from '../../Components'
import {colors} from '../../Styles/theme.json'
import util from '../../util'

export default function Header({
  title = 'Explore',
  right = null,
  goBack = false,
}) {
  const navigation = useNavigation()
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: util.toAlpha(colors.muted, 50),
        backgroundColor: colors.light,
      }}>
      <StatusBar barStyle="default" />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Touchable
          width="70px"
          justify="center"
          align="center"
          hasPadding
          onPress={() => navigation[!goBack ? 'openDrawer' : 'goBack']()}>
          <Icon name={!goBack ? 'menu' : 'arrow-left'} size={20} />
        </Touchable>
        <Box align="center" justify="center">
          <Title>{title}</Title>
        </Box>
        {right ? right() : <Touchable hasPadding width="70px"></Touchable>}
      </SafeAreaView>
    </View>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  right: PropTypes.func,
  goBack: PropTypes.bool,
}
