import React from "react"
import Page from "../../../components/page"
import Products from "../../../components/products"
import refrigeration from '../../../data/refrigeration.json'

const Refrigeration = () => {

  return (
    <Page
      breadcrumbs={[{"title": "Products", "slug": "/products"}, {"title": "Refrigeration", "slug": "/products/refrigeration"}]}
    >
      <Products products={refrigeration} />
    </Page>
  )
}

export default Refrigeration

export function Head() {
  return(
    <title>ICB World Trade | Refrigeration</title>
  )
}