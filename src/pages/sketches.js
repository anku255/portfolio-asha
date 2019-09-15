import React, { Component } from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'
import { theme, updateTheme } from '../themes/theme'

class Sketches extends Component {
  constructor(props) {
    super(props)
    updateTheme(theme.grey)
  }

  componentWillUnmount = () => {
    updateTheme(theme.pink)
  }

  render() {
    const images = this.props.data.images.edges

    return (
      <Layout>
        <div className="sketches-container">
          <h1 className="heading-primary">Sketches</h1>
          <Masonry className="showcase">
            {images.map(({ node: work }) => (
              <div key={work.id} className="showcase__item">
                <Link to={`/image/${work.slug}`}>
                  <Img fluid={work.photo.fluid} />
                  <h4 className="showcase__title">
                    <span className="showcase__title-span">{work.title}</span>
                  </h4>
                </Link>
              </div>
            ))}
          </Masonry>
        </div>
      </Layout>
    )
  }
}

export default Sketches

export const pageQuery = graphql`
  query {
    images: allContentfulImage(sort: { fields: [createdAt], order: DESC }) {
      totalCount
      edges {
        node {
          id
          title
          slug
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
