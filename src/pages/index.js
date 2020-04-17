import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/Global/BackgroundSection'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'

const IndexPage = ({ data }) => <Layout>
    <SEO title="Home"/>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Joe's Mock Coffee"
    />
    <Info/>
    <Menu menu={data.menu}/>
    <Products/>
    <Contact/>
</Layout>

export const query = graphql`
  query {
    img: file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      nodes {
        title
        price
        id
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
        description {
          description
        }
      }
    }
  }
`

export default IndexPage
