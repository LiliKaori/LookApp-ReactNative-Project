import React from 'react'

import {ScrollView} from '..'

import Products from '.'

export default function ProductList() {
  return (
    <ScrollView fluid>
      {Array.from(Array(50))?.map(item => (
        <Products
          key={Math.random}
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXovt4Pwcx41pFucTy-Dr5ce0jRSPNyrYpNg&usqp=CAU"
          brand="Raf Simons"
          title="Large striped cardigan"
          price="$1080"
        />
      ))}
    </ScrollView>
  )
}
