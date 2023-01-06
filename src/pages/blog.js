// import React from "react"
// import { graphql } from "gatsby"
// import styled from "styled-components"
// import { device } from "../base/device"
// import { variable } from "../base/variables"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import LeadText from "../components/lead-text"

// export const queryPosts = graphql`
//   {
//     wp {
//       pageBy(uri: "blog") {
//         content(format: RENDERED)
//         title
//       }
//       posts(where: { orderby: { field: DATE, order: DESC } }) {
//         edges {
//           node {
//             content
//             title
//             slug
//             excerpt
//             date
//           }
//         }
//       }
//     }
//   }
// `

// const BlogBrief = styled.div`
//   border-bottom: 1px solid ${variable.colorBorder};
//   padding-bottom: 40px;

//   h2 {
//     font-size: 60px;
//     line-height: 1;

//     a {
//       border: none;
//       margin: 0;
//     }
//   }

//   .meta {
//     color: gray;
//     margin: 10px 0;
//     font-size: 0.9rem;
//   }
// `

// const Blog = ({ data }) => {
//   const blogTitle = data.wp.pageBy.title
//   const blogLead = data.wp.pageBy.content
//   const blogPosts = data.wp.posts.edges
//   return (
//     <Layout type="split" slug="blog">
//       <SEO title="Blog" />
//       <h1>{blogTitle}</h1>
//       <LeadText>
//         <div dangerouslySetInnerHTML={{ __html: blogLead }} />
//       </LeadText>
//       {blogPosts.map(blogPost => {
//         const postTitle = blogPost.node.title
//         const postExcerpt = blogPost.node.excerpt
//         const postSlug = blogPost.node.slug
//         const postDate = blogPost.node.date

//         return (
//           <BlogBrief key={postSlug}>
//             <h2>
//               <a href={postSlug}>{postTitle}</a>
//             </h2>
//             <p class="meta">Published on {postDate}</p>
//             <span dangerouslySetInnerHTML={{ __html: postExcerpt }} />
//           </BlogBrief>
//         )
//       })}
//     </Layout>
//   )
// }

// export default Blog
