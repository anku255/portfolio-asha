import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'

const Sketches = ({ data }) => {
  const images = data.images.edges

  return (
    <Layout>
      <div className="sketches-container">
        <h1 className="heading-primary">Sketches</h1>
        <Masonry className="showcase">
          {images.map(({ node: work }) => (
            <div key={work.id} className="showcase__item">
              <Img fluid={work.photo.fluid} />
            </div>
          ))}
        </Masonry>
      </div>
    </Layout>
  )
}

export default Sketches

export const pageQuery = graphql`
  query {
    images: allContentfulImage {
      totalCount
      edges {
        node {
          id
          title
          photo {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
