const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      wp {
        posts(where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              content
              title
              slug
              excerpt
              date
            }
          }
        }
      }
    }
  `)

  result.data.wp.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: { node },
    })
  })
}
