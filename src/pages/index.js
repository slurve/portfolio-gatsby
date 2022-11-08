import React from "react"
import { graphql } from "gatsby"
import LayoutHome from "../components/layout-home"
import SEO from "../components/seo"

export const query = graphql`
  {
    wordpress {
      pageBy(uri: "home") {
        home {
          availability
          homeLead
          homeTagline
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  const homeLead = data.wordpress.pageBy.home.homeLead
  const homeTagline = data.wordpress.pageBy.home.homeTagline
  return (
    <LayoutHome slug="home">
      <SEO title="Home" />
      <h1>{homeLead}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: homeTagline }} />
    </LayoutHome>
  )
}

export default IndexPage
