import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet} from 'react-native'

import {colors} from '../../Styles/theme.json'

import {Box, Spacer, Text, Touchable} from '..'

export default function Picker({
  options = [],
  initialValue = '',
  title = '',
  onChange = value => {},
}) {
  const [selected, setSelected] = useState('')
  useEffect(() => {
    setSelected(initialValue)
  }, [])
  return (
    <>
      <Text bold color="dark">
        {' '}
        {title}
      </Text>
      <Spacer />
      <Box row fluid heigth="50px">
        {options?.map(opt => (
          <Touchable
            onPress={() => {
              setSelected(opt?.value)
              onChange(opt?.value)
            }}
            key={opt.label}
            style={[
              styles.base,
              styles[selected === opt?.value ? 'checked' : 'unchecked'],
            ]}>
            <Text
              style={
                styles[selected === opt?.value ? 'textChecked' : undefined]
              }>
              {opt.label}
            </Text>
          </Touchable>
        ))}
      </Box>
    </>
  )
}

const styles = StyleSheet.create({
  base: {
    maxWidth: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unchecked: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.muted,
  },
  checked: {
    backgroundColor: colors.primary,
  },
  textChecked: {
    color: colors.light,
  },
})

Picker.propTypes = {
  options: PropTypes.array,
  initialValue: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
}
