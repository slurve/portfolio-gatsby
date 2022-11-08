import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const aboutQuery = graphql`
  {
    wordpress {
      pageBy(uri: "about") {
        content(format: RENDERED)
        title
        slug
      }
    }
  }
`

const aboutPage = ({ data }) => {
  const aboutTitle = data.wordpress.pageBy.title
  const aboutContent = data.wordpress.pageBy.content
  return (
    <Layout type="split" slug="about">
      <SEO title={aboutTitle} />
      <h1>{aboutTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </Layout>
  )
}

export default aboutPage
