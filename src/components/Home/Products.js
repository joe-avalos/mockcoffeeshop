import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Product from './Product'
import Title from '../Global/Title'

const Products = () => {
  const {products:{nodes}} = useStaticQuery(getProducts)
  console.log(nodes)
  return <section className="py-5">
    <div className="container">
      <Title title="our products" />
      <div className="row">
        {nodes.map(product => <Product key={product.id} product={product} />)}
      </div>
    </div>
  </section>
}

export const getProducts = graphql`
  query {
    products: allContentfulCoffeeProduct {
      nodes {
        id
        image {
          fluid(maxHeight: 426) {
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        title
        price
      }
    }
  }
`

export default Products
