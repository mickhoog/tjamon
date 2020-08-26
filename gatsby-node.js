exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(
    `
    {
      allCategoriesJson {
        nodes {
          categoryId
          categoryName
        }
      }
    }
    `)  
  
  const categoryTemplate = require.resolve('./src/templates/CategoryPage.js')
  const productTemplate = require.resolve('./src/templates/ProductPage.js')

    if(data.error) {
        console.log('Error retrieving data', data.errors)
        return
    }

    await Promise.all(data.data.allCategoriesJson.nodes.map(async (node)=>{
      createPage({
          path: `/${node.categoryName}`,
          component: categoryTemplate,
          context: {
            categoryId: node.categoryId
          }      
      });
        const productsQuery = await graphql(
            `
            {
              allProductsJson(filter: {categoryId: {eq: ${node.categoryId}}}) {
                nodes {
                  name
                  categoryId
                  slug
                }
              }
            }
            `)  
          productsQuery.data.allProductsJson.nodes.forEach(element => {
            createPage({
              path: `/${node.categoryName}/${element.slug}`,
              component: productTemplate,
              context: {
                  slug: element.slug
              }
            })
          });
    }))
}
