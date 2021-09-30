import React, { FC }  from "react"
import Layout from "../../view/components/Layout"
import SEOComponent from "../../view/components/Seo"

interface IPostProps {
  pageContext: any;
}

const Post:FC<IPostProps> = ({
  pageContext
}) => {
  const post = pageContext.post

  return (
    <Layout>
      <>
        <SEOComponent title={ post.title } />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={ { __html: post.content } } />
      </>
    </Layout>
  )
}

export default Post