import React from "react"
import { graphql } from "gatsby"
import LayoutHome from "../components/layout-home"
import SEO from "../components/seo"

export const query = graphql`
  {
    wp {
      pageBy(uri: "home") {
        home {
          homeLead
          homeTagline
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const homeLead = data.wp.pageBy.home.homeLead
  const homeTagline = data.wp.pageBy.home.homeTagline
  return (
    <LayoutHome slug="home">
      <SEO title="Home" />
      <h1>{homeLead}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: homeTagline }} />
    </LayoutHome>
  )
}

export default IndexPage
