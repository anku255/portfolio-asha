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
                node {
                  slug
                  createdAt
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

        const pages = []

        for (let i = 0; i < totalCount; i++) {
          const localFilePath =
            allContentfulAsset.edges[i].node.localFile.absolutePath
          const slug = allContentfulImage.edges[i].node.slug
          const createdAt = allContentfulImage.edges[i].node.createdAt

          // get the dominant color

          const rgbColor = await ColorThief.getColor(localFilePath)
          const hexColor = rgbToHex(rgbColor)

          const page = {
            path: `/image/${slug}/`,
            component: Image,
            context: {
              backgroundColor: hexColor,
              slug: slug,
            },
          }

          pages.push({
            page,
            createdAt,
          })
        }

        // sort the pages by createdAt (desc)
        pages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        pages.forEach(({ page }, index) => {
          createPage({
            ...page,
            context: {
              ...page.context,
              prev: index === 0 ? null : pages[index - 1].page.context.slug,
              next:
                index === pages.length - 1
                  ? null
                  : pages[index + 1].page.context.slug,
            },
          })
        })
      })
    )
  })
}
