import React, { useState } from 'react'
import GatsbyImage from 'gatsby-image'

import Title from '../Global/Title'

const getCategories = items => {
  let tempItems = items.map(i => i.category)
  tempItems.sort()
  let tempCategories = new Set(['all', ...tempItems])
  return Array.from(tempCategories)
}

const Menu = ({ menu: { nodes } }) => {
  const [items] = useState(nodes)
  const [menu, setMenu] = useState(nodes)
  const [categories] = useState(getCategories(nodes))
  
  const handleFilter = category => {
    if (category === 'all') {
      setMenu(items)
    }else{
      setMenu(items.filter(i => i.category === category))
    }
  }
  
  if (menu.length <= 0) return <section className="menu py-5">
    <div className="container">
      <Title title="Best of our menu"/>
      <div className="row">
        <div className="col-10 col-sm-6 mx-auto text-capitalize text-center">
          <h1>There are no items to display</h1>
        </div>
      </div>
    </div>
  </section>
  
  return <section className="menu py-5">
    <div className="container">
      <Title title="Best of our menu"/>
      {/* CATEGORIES */}
      <div className="row mb-5">
        <div className="col-10 mx-auto text-center">
          {categories.map((category, idx) => <button
            type="button" key={idx}
            className="btn btn-yellow text-capitalize m-3"
            onClick={()=>handleFilter(category)}
          >
            {category}
          </button>)}
        </div>
      </div>
      {/* ITEMS */}
      <div className="row">
        {menu.map(item => (
          <div key={item.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
            <div>
              <GatsbyImage fixed={item.image.fixed}/>
            </div>
            {/* ITEM CONTENT */}
            <div className="flex-grow-1 px-3">
              <div className="d-flex justify-content-between">
                <h6 className="mb-0 text-capitalize">
                  <small>{item.title}</small>
                </h6>
                <h6 className="mb-0 text-yellow">
                  <small>${item.price}</small>
                </h6>
              </div>
              <p className="text-muted">
                <small>{item.description.description}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
}

export default Menu
