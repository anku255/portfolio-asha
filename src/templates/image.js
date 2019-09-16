import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Link from 'gatsby-link'
import cx from 'classnames'

import { invertColor } from '../utils'

class ImageTemplate extends React.Component {
  render() {
    const { title, photo } = this.props.data.contentfulImage
    const { prev, next, backgroundColor } = this.props.pageContext
    return (
      <Layout>
        <Helmet>
          <title>{title} | Asha Sharma</title>
        </Helmet>
        <div className="image">
          <div
            className="image__container"
            style={{
              background: backgroundColor,
            }}
          >
            <figure>
              <Img
                className="image__picture"
                imgStyle={{ objectFit: 'contain' }}
                fluid={photo.fluid}
              />
              <figcaption style={{ color: invertColor(backgroundColor) }}>
                {this.props.data.contentfulImage.title}
              </figcaption>
            </figure>
          </div>
          <div className="image__buttons">
            <button
              className={cx('image__buttons-prev', {
                disabled: prev === null,
              })}
            >
              <Link to={`/image/${prev}`}>⬅ Prev</Link>
            </button>
            <button
              className={cx('image__buttons-next', {
                disabled: next === null,
              })}
            >
              <Link to={`/image/${next}`}>Next ➡</Link>
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
