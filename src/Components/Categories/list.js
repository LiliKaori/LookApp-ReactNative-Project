import React from 'react'

import {ScrollView} from '..'

import Categories from '.'

export default function CategoryList() {
  return (
    <ScrollView
      fluid
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      {Array.from(Array(50))?.map(item => (
        <Categories key={Math.random} title={'Category'} description="Legal" />
      ))}
    </ScrollView>
  )
}
