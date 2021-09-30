
/** Parses a menu item object and returns Gatsby-field URI.
 * @param {object} menuItem a single menu item
 * @param wordPressUrl
 * @param blogURI */


export const CreateLocalLink = (menuItem, wordPressUrl: any, blogURI='blog/') => {
  const { url, connectedObject } = menuItem
  let newUri = url.replace(wordPressUrl, '')

  if (url === '#') {
    return null
  }
  
  /** If it's a blog link, respect the users blogURI setting */
  if (connectedObject && connectedObject.__typename === 'WPGraphQL_Post') {
    newUri = blogURI + newUri
  }
  
  return newUri
}