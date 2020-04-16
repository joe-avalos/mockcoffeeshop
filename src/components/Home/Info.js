import React from 'react'
import { Link } from 'gatsby'

import Title from '../Global/Title'

const Info = () => {
  return <section className="py-5">
    <div className="container">
      <Title title="Our Story" />
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis dolor in odit qui similique
            veritatis? Cumque delectus eligendi eos id minima necessitatibus odit, omnis, optio perferendis provident
            quis quod, tempora! Aliquid architecto, deleniti dignissimos dolore eveniet explicabo facere illo non
            pariatur provident, quae reprehenderit rerum saepe.
          </p>
          <Link to="/about">
            <button className="btn text-uppercase btn-yellow">about page</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
}

export default Info
