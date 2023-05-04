import PropTypes from 'prop-types'
import React from 'react'

import {ScrollView} from '..'

import Categories from '.'

export default function CategoryList({categories}) {
  return (
    <ScrollView
      fluid
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      {categories?.map(category => (
        <Categories key={category.id} category={category} />
      ))}
    </ScrollView>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.object,
}
