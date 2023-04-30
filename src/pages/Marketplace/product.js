import React from 'react'
import {StretchyScrollView} from 'react-native-stretchy'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {Box, Button, Spacer, Text, Title, Touchable} from '../../Components'
import Header from '../../Components/Header'
import Picker from '../../Components/Picker'
import {colors} from '../../Styles/theme.json'
import util from '../../util'

export default function Product() {
  return (
    <>
      <Header
        title="Striped Cardigan"
        goBack
        right={() => (
          <Touchable
            width="70px"
            hasPadding
            justify="center"
            align="center"
            onPress={() => alert('teste')}>
            <Icon name="bag" size={20}></Icon>
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU',
        }}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)}></Box>}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              $1080
            </Title>
          </Box>
        }>
        <Box hasPadding background="light">
          <Text color="black">TSHIRT</Text>
          <Spacer size="20px" />
          <Title color="black">A.P.C. CollectionSpring 2015 </Title>
          <Spacer size="30px" />
          <Text color="dark">
            Enjoy the beauty of italian cotton all over your body. This item
            will fit your body and warm you up all over and during spring. This
            item will fit your body and warm you up all over and during spring.
            And over and over again, this is the text.
          </Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={[
              {label: 'P', value: 'P'},
              {label: 'M', value: 'M'},
              {label: 'G', value: 'G'},
              {label: 'XG', value: 'XG'},
            ]}
            initialValue="M"
            onChange={value => alert(value)}
          />
          <Spacer size="30px" />
          <Button block>
            <Text color="light">Add to Cart</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  )
}
