import React from 'react'
import {FaGulp} from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaGulp/>
    <div className="alert alert-primary" role="alert">Check it out!!!</div>
  </Layout>
)

export default IndexPage
