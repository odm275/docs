import React from "react"
import { graphql } from "gatsby"

const PostTemplate = ({ data: { post } }) => (
  <>
    <h1>{post.frontmatter.name}</h1>
    <p>{post.frontmatter.createdTime}</p>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </>
)

export default PostTemplate

// You need to enable `gatsby-transformer-remark` to query `markdownRemark`.
// If you don't use it, query `googleDocs`
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        createdTime(formatString: "DD MMMM YYYY", locale: "fr")
      }
    }
  }
`
