const path = require('path')
const ColorThief = require('colorthief')

const rgbToHex = ([r, g, b]) =>
  '#' +
  [r, g, b]
    .map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Image = path.resolve('./src/templates/image.js')
    resolve(
      graphql(
        `
          {
            allContentfulAsset(
              sort: { fields: [file___fileName], order: ASC }
            ) {
              edges {
                node {
                  localFile {
                    absolutePath
                  }
                }
              }
              totalCount
            }

            allContentfulImage(
              sort: { fields: [photo___file___fileName], order: ASC }
            ) {
              edges {
                previous {
                  slug
                }
                next {
                  slug
                }
                node {
                  slug
                }
              }
              totalCount
            }
          }
        `
      ).then(async result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const { allContentfulAsset, allContentfulImage } = result.data

        const { totalCount } = allContentfulAsset

        for (let i = 0; i < totalCount; i++) {
          const localFilePath =
            allContentfulAsset.edges[i].node.localFile.absolutePath
          const slug = allContentfulImage.edges[i].node.slug
          const prev = allContentfulImage.edges[i].previous
          const next = allContentfulImage.edges[i].next

          // get the dominant color

          const rgbColor = await ColorThief.getColor(localFilePath)
          const hexColor = rgbToHex(rgbColor)

          createPage({
            path: `/image/${slug}/`,
            component: Image,
            context: {
              backgroundColor: hexColor,
              slug: slug,
              prev: prev && prev.slug,
              next: next && next.slug,
            },
          })
        }
      })
    )
  })
}
