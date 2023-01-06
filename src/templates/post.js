import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPost = blogPost => {
  const postTitle = blogPost.pageContext.node.title
  const postContent = blogPost.pageContext.node.content
  const postDate = blogPost.pageContext.node.date
  return (
    <Layout type="split" slug="blog">
      <SEO title="blog" />
      <>
        <h1>{postTitle}</h1>
        <p class="meta">Published on {postDate} by Tom Rose</p>
        <span dangerouslySetInnerHTML={{ __html: postContent }} />
      </>
    </Layout>
  )
}

export default BlogPost
