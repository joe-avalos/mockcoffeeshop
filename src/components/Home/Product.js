import React from 'react'
import GatsbyImage from 'gatsby-image'

const Product = ({product}) => {
  return <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
    <div className="card" style={{minHeight:'100%'}}>
      <GatsbyImage fluid={product.image.fluid} alt="product image" className="card-img-top" style={{minHeight: 232}} />
      <div className="card-body text-center">
        <h6 className="text-capitalize">{product.title}</h6>
        <h6>${product.price}</h6>
        <button type="button" className="btn btn-yellow mt-3 text-capitalize">
          add to cart
        </button>
      </div>
    </div>
  </div>
}

export default Product
