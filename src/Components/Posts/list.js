import React from 'react'

import {Box} from '..'

import Posts from '.'

export default function PostsList() {
  return (
    <Box>
      {Array.from(Array(50))?.map(item => (
        <Posts key={Array.index} />
      ))}
    </Box>
  )
}
