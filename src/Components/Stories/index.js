import React from 'react'

import {colors} from '../../Styles/theme.json'

import {Box, Cover, Text, Touchable} from '..'

export default function Stories() {
  return (
    <Touchable
      onPress={() => alert('teste')}
      background="black"
      radius="10px"
      height="190px"
      spacing="0 5px 0"
      width="150px">
      <Cover
        width="100%"
        height="100%"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU">
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between">
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU"></Cover>

          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              Calorina Silva
            </Text>
            <Text color="light" variant="small">
              2 min ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  )
}
