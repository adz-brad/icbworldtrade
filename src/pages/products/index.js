import React from "react"
import products from '../../data/products.json'
import Page from "../../components/page"
import Products from "../../components/products"

const ProductsPage = () => {

  return (
    <Page
      breadcrumbs={[{"title": "Products", "slug": "/products"}]}
      heading="Products"
    >
      <Products products={products} />
    </Page>
  )
}

export default ProductsPage

export function Head () {
  return(
    <title>ICB World Trade | Products</title>
  )
}