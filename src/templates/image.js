import React from 'react'
import Helmet from 'react-helmet' // TODO: Use helmet to change site title (See demo)
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Link from 'gatsby-link'
import cx from 'classnames'

class ImageTemplate extends React.Component {
  render() {
    const { photo } = this.props.data.contentfulImage
    const { prev, next } = this.props.pageContext
    if (!photo) {
      return <h1>Loading</h1>
    }

    return (
      <Layout>
        <div className="image">
          <div className="image__container">
            <figure>
              <Img
                className="image__picture"
                imgStyle={{ objectFit: 'contain' }}
                fluid={photo.fluid}
              />
              <figcaption>{this.props.data.contentfulImage.title}</figcaption>
            </figure>
          </div>
          <div className="image__buttons">
            <button
              className={cx('image__buttons-prev', {
                disabled: prev === null,
              })}
            >
              <Link to={`/image/${prev && prev.slug}`}>⬅ Prev</Link>
            </button>
            <button
              className={cx('image__buttons-next', {
                disabled: next === null,
              })}
            >
              <Link to={`/image/${next && next.slug}`}>Next ➡</Link>
            </button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ImageTemplate

export const pageQuery = graphql`
  query ImageBySlug($slug: String!) {
    contentfulImage(slug: { eq: $slug }) {
      title
      photo {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_tracedSVG
          aspectRatio
        }
      }
    }
  }
`
