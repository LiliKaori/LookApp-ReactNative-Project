import PropTypes from 'prop-types'
import React from 'react'

import {Box, Text, ScrollView} from '..'

import Stories from '.'

export default function StoriesList({stories}) {
  return (
    <Box fluid height="270px">
      <Box row fluid justify="space-between" height="60px" hasPadding>
        <Text bold color="dark">
          Stories
        </Text>
        <Text color="danger" underline>
          {' '}
          Show All
        </Text>
      </Box>
      <ScrollView horizontal style={{paddingLeft: 20}}>
        {stories?.map(story => (
          <Stories key={stories.id} story={story} />
        ))}
      </ScrollView>
    </Box>
  )
}

StoriesList.propTypes = {
  stories: PropTypes.array,
}
