import React from 'react'
import Layout from '../components/Layout'
import HeroImage from '../images/svg/hero-img.svg'
import Link from 'gatsby-link'

const IndexPage = () => {
  return (
    <Layout>
      <section className="section__hero">
        <div className="columns">
          <div className="column hero-img">
            <HeroImage className="hero-img-svg" />
          </div>
          <div className="column hero-text">
            <div className="hero-text__heading">
              <h1>Hi! I am Asha.</h1>
              <h2>I make beautiful things with a pencil.</h2>
              <Link to="/sketches" className="btn btn--pink btn--animated">See my Work</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
