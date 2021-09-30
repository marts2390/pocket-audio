exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions
  
  createRedirect({
    fromPath: '/',
    toPath: '/home',
    isPermanent: true,
    redirectInBrowser: true,
  })
}