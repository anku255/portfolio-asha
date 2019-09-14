const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Image = path.resolve('./src/templates/image.js')
    resolve(
      graphql(
        `
          {
            allContentfulImage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const images = result.data.allContentfulImage.edges
        images.forEach((image, index) => {
          createPage({
            path: `/image/${image.node.slug}/`,
            component: Image,
            context: {
              slug: image.node.slug,
              prev: index === 0 ? null : images[index - 1].node,
              next: index === images.length - 1 ? null : images[index + 1].node,
            },
          })
        })
      })
    )
  })
}
