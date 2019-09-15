import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import HeroImage from '../images/svg/artist-img.svg'

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Me | Asha Sharma</title>
      </Helmet>
      <section className="about-page section__hero">
        <div className="columns">
          <div className="column hero-img">
            <HeroImage className="hero-img-svg" />
          </div>
          <div className="column hero-text">
            <p>
              Hi! I am Asha Sharma. I am a sketch artist by passion and software
              enginner by profession. You can find me on{' '}
              <a href="https://www.instagram.com/beinganartist/">Instagram</a>,{' '}
              <a href="https://www.facebook.com/">Facebook</a>, and{' '}
              <a href="https://www.youtube.com/channel/UCeDg588ylKWdGuIF-n94-7Q">
                Youtube
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
