import React, { FC } from 'react'
import { Typography, Container } from '@material-ui/core'
import { Link } from 'gatsby'
import Button from '../view/components/Button'

import Seo from '../view/components/Seo'

const NotFoundPage: FC = () => {
  return (
    <Container
      maxWidth="md"
      style={ {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh'
      } }
    >
      <div>
        <Seo title="404: Not found" />
        <Typography
          variant="h2"
          gutterBottom
          component="h1"
          style={ {
            fontWeight: 800,
            textAlign: 'center',
          } }
        >
          NOT FOUND
        </Typography>
        <Typography
          variant="h4"
          style={ { textAlign: 'center' } }
        >
          Oops! Looks like route doesn't exist
        </Typography>
        <div
          style={ { 
            display: 'flex',
            justifyContent: 'center',
          } }
        >
          <Link
            to="/home"
            style={ { 
              textDecoration: 'none',
            } }
          >
            <Button>Take me home</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundPage
