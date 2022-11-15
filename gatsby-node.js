const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      wp {
        posts {
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
  `)

  result.data.wp.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: { node },
    })
  })
}
