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
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      cover: PropTypes.string,
      description: PropTypes.string,
      isLiked: PropTypes.bool,
      likeInfos: PropTypes.object,
      owner: {
        username: PropTypes.string,
        photo: PropTypes.string,
      },
      createdAt: PropTypes.string,
    })
  ),
}
