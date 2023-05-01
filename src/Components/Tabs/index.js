import React from 'react'
import PropTypes from 'prop-types'

import {colors} from '../../Styles/theme.json'

import {ScrollView, Text, Touchable} from '..'

export default function Tabs({tabs = [], active = '', onChange = tab => {}}) {
  const totalTabs = tabs?.length
  const activeTabStyle = {
    borderBottomWidth: 3,
    borderBottomColor: colors.danger,
  }

  return (
    <ScrollView
      horizontal
      style={{
        maxHeight: 70,
        backgroundColor: colors.light,
      }}>
      {tabs?.map(tab => (
        <Touchable
          key={tab.value}
          onPress={() => onChange(tab.value)}
          hasPadding
          style={[
            {
              minWidth: `${100 / totalTabs}%`,
              alignItems: 'center',
            },
            active === tab.value ? activeTabStyle : {},
          ]}>
          <Text color={active === tab.value ? 'primary' : undefined}>
            {tab.label}
          </Text>
        </Touchable>
      ))}
    </ScrollView>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  active: PropTypes.string,
  onChange: PropTypes.func,
}
