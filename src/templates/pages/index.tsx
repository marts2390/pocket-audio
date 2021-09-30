import React, { FC } from "react"
import Layout from "../../view/components/Layout"
import SEOComponent from "../../view/components/Seo"

interface IPageProps {
  pageContext: any;
}

const Page:FC<IPageProps> = ({ pageContext }) => {
  const page = pageContext.page

  return (
    <Layout>
      <>
        <SEOComponent title={ page.title } />
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={ { __html: page.content } } />
      </>
    </Layout>
  )
}

export default Page