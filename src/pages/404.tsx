import React, { FC } from 'react'
import { Typography, Container } from '@material-ui/core'

import Seo from '../view/components/Seo'


const NotFoundPage: FC = () => {
  return (
    <Container maxWidth="md">
      <Seo title="404: Not found" />
      <Typography
        variant="h2"
        gutterBottom
        component="h1"
      >
        NOT FOUND
      </Typography>
      <Typography variant="body1">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>
    </Container>
  )
}

export default NotFoundPage
