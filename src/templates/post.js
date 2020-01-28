import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPost = blogPost => {
  const postTitle = blogPost.pageContext.node.title
  const postContent = blogPost.pageContext.node.content
  return (
    <Layout type="split" slug="blog">
      <SEO title="blog" />
      <>
        <h1>{postTitle}</h1>
        <span dangerouslySetInnerHTML={{ __html: postContent }} />
      </>
    </Layout>
  )
}

export default BlogPost
