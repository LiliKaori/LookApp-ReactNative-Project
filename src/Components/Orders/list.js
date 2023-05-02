import React from 'react'

import {ScrollView} from '..'

import Orders from '.'

export default function OrderList() {
  return (
    <ScrollView fluid background="light" hasPadding>
      {Array.from(Array(3))?.map(item => (
        <Orders key={Math.random()} />
      ))}
    </ScrollView>
  )
}
