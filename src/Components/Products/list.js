import PropTypes from 'prop-types'
import React from 'react'

import {ScrollView} from '..'

import Products from '.'

export default function ProductList({products}) {
  return (
    <ScrollView fluid>
      {products?.map(product => (
        <Products
          key={product.id}
          product={product}
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU"
          brand="Raf Simons"
          title="Large striped cardigan"
          price="$1080"
        />
      ))}
    </ScrollView>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
}
