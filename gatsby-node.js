exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(
    `
      {
        allWineJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

    if(data.error) {
        console.log('Error retrieving data', data.errors)
        return
    }

    const wineTemplate = require.resolve('./src/templates/WinePage.js')

    data.data.allWineJson.edges.forEach(edge => {
        createPage({
            path: `/wine/${edge.node.slug}`,
            component: wineTemplate,
            context: {
                slug: edge.node.slug
            }
        })
    })

}
