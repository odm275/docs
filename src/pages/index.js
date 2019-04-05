import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardPreview from "../components/card-preview"
//Query information for all the cards by id

const IndexPage = ({ data }) => {
  const cardPreviews = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Gatsby w/ Google Docs as CMS experiment</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        {cardPreviews.map(card => (
          <CardPreview
            link={card.node.fields.slug}
            title={card.node.frontmatter.name}
          />
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const postPreviewQuery = graphql`
  query postPreviewQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
