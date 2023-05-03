import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {colors} from '../../Styles/theme.json'

import {Box, Cover, Text, Touchable} from '..'

export default function Stories({story}) {
  return (
    <Touchable
      onPress={() => alert('teste')}
      background="black"
      radius="10px"
      height="190px"
      spacing="0 5px 0"
      width="150px">
      <Cover width="100%" height="100%" image={story?.cover}>
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
            image={story?.owner?.photo}></Cover>

          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              {story?.owner?.username}
            </Text>
            <Text color="light" variant="small">
              {moment(story?.createdAt).fromNow()}
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  )
}

Stories.propTypes = {
  story: PropTypes.object,
}
