const _kebabCase = require("lodash/kebabCase") // Optional, you can use the lib you want or generate slug manually

exports.onCreateNode = ({ node, actions }) => {
  // You need to enable `gatsby-transformer-remark` to transform `GoogleDocs` type to `MarkdownRemark` type.
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.name) {
    actions.createNodeField({
      name: `slug`,
      node,
      value: `/${_kebabCase(node.frontmatter.name)}`,
    })
  }
}

// You need to enable `gatsby-transformer-remark` to query `allMarkdownRemark`.
// If you don't use it, query `allGoogleDocs`
exports.createPages = async ({ graphql, actions }) =>
  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___createdTime], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach((post, index) => {
      console.log(post)
      actions.createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: post.node.fields.slug,
        },
      })
    })
  })
