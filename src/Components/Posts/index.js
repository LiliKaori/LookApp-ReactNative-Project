import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'

import {Box, Cover, Spacer, Text, Touchable} from '..'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {colors} from '../../Styles/theme.json'

export default function Posts({post}) {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover width="40px" height="40px" circle image={post.owner.photo} />
        <Box spacing="0 0 0 10px">
          <Text bold color="dark">
            {post?.owner?.username}
          </Text>
          <Text variant="small">{moment(post?.createdAt).fromNow()}</Text>
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
        image={post?.cover}
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
          {post.likeInfos?.photos?.map(photo => (
            <Cover
              key={Math.random()}
              circle
              width="30px"
              height="30px"
              border={`1px solid ${colors.light}`}
              spacing="0 -15px 0 0"
              image={photo}></Cover>
          ))}
          <Text variant="small" spacing="0 20px">
            {post.likeInfos?.description}
          </Text>
          <Spacer />
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0 0 0 15px">
            <Icon
              name="heart"
              size={24}
              color={colors[post?.isLiked ? 'danger' : 'muted']}
            />
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
        {post?.description}
      </Text>
    </Box>
  )
}

Posts.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
}
