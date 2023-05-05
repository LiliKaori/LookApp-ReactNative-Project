import PropTypes from 'prop-types'
import React from 'react'

import {Box} from '..'

import Posts from '.'

export default function PostsList({posts}) {
  return (
    <Box
      style={{
        minWidth: '100%',
      }}>
      {posts?.map(post => (
        <Posts key={post.id} post={post} />
      ))}
    </Box>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array,
}
