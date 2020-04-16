import React from 'react'
import { FaGulp } from 'react-icons/fa'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/Global/BackgroundSection'
import Info from '../components/Home/Info'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Joe's Mock Coffee"
    />
    <Info />
  </Layout>
)

export const getBg = graphql`
  query {
    img: file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
