import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeadText from "../components/lead-text"

export const queryPosts = graphql`
  {
    wp {
      pageBy(uri: "blog") {
        content(format: RENDERED)
        title
      }
      posts(where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            content
            title
            slug
            excerpt
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const blogTitle = data.wp.pageBy.title
  const blogLead = data.wp.pageBy.content
  const blogPosts = data.wp.posts.edges
  return (
    <Layout type="split" slug="blog">
      <SEO title={blogTitle} />
      <h1>{blogTitle}</h1>
      <LeadText>
        <div dangerouslySetInnerHTML={{ __html: blogLead }} />
      </LeadText>
      {blogPosts.map(blogPost => {
        const postTitle = blogPost.node.title
        const postExcerpt = blogPost.node.excerpt
        const postSlug = blogPost.node.slug
        return (
          <div key={postSlug}>
            <h2>
              <a href={postSlug}>{postTitle}</a>
            </h2>
            <span dangerouslySetInnerHTML={{ __html: postExcerpt }} />
          </div>
        )
      })}
    </Layout>
  )
}

export default Blog
