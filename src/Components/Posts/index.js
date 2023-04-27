import React from 'react'

import {Box, Cover, Spacer, Text, Touchable} from '..'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {colors} from '../../Styles/theme.json'

export default function PostsList() {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover
          width="40px"
          height="40px"
          circle
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU"
        />
        <Box spacing="0 0 0 10px">
          <Text bold color="dark">
            Silva Sampaio
          </Text>
          <Text variant="small">20 min ago</Text>
        </Box>
        <Touchable height="30px" width="100px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>
      <Cover
        width="100%"
        height="190px"
        spacing="10px 0"
        radius="10px"
        source={require('../../assets/street-europe.jpg')}
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map(item => (
            <Cover
              circle
              width="30px"
              height="30px"
              border={`1px solid ${colors.light}`}
              spacing="0 -15px 0 0"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU"></Cover>
          ))}
          <Text variant="small" spacing="0 20px">
            Liked by 10,098
          </Text>
          <Spacer />
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0 0 0 15px">
            <Icon name="heart" size={24} color={colors.danger} />
          </Touchable>
          <Touchable width="24px" spacing="0 0 0 15px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px" spacing="0 0 0 15px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Text color="dark" small>
        Interview: Shoe Designer John Fluevog On New Book, Spirituality And
        ‘Slow Fashion’
      </Text>
    </Box>
  )
}
