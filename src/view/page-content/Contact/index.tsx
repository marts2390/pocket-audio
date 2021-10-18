import React, { FC, useState } from 'react'
import PageBanner from '../../components/PageBanner'
import { Formik, Form, FormikProps } from 'formik'
import { TextField, Grid, Button } from '@material-ui/core'
import { createMarkup } from '../../../util'
import axios from 'axios'
import styles from './styles.module.scss'
import * as Yup from 'yup'

interface IContactPageProps {
    data: any;
}

interface IFormikProps {
    name: string;
    email: string;
    message: string;
}

const ContactPageComponent:FC<IContactPageProps> = ({ data }) => {
  const { wpPage } = data.data
  const { allPages } = data.data.wpPage
  const { contactFields } = data.data.wpPage
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [sent, setSent] = useState(false)

  const initialValues = {
    name: '',
    email: '',
    message: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    message: Yup.string().required('Required'),
  })

  const onSubmit =  async (e: IFormikProps) => {
    setLoading(true)
    

    try {
      await axios.post("https://getform.io/f/86e987d2-19f6-43e7-a401-f943b9368893", {
        from: e.name,
        email: e.email,
        message: e.message,
      })
    } catch(err) {
      console.log(err)
      setError(true)
      setLoading(false)
    }

    setLoading(false)
    setSent(true)
  }

  return (
    <div className={ styles.contact }>
      <PageBanner
        bannerImage={ allPages.pageBanner.sourceUrl }
        title={ wpPage.title }
      />
      <div className={ styles.main }>
        
        {!sent ? (
          <>
            <div
              className={ styles.content }
              dangerouslySetInnerHTML={ createMarkup(wpPage.content) }
            />
            {error && <p className={ styles.error }>Oops looks like something went wrong, please try again</p>}
            <Formik
              data-testid="garment-verification-form"
              initialValues={ initialValues }
              onSubmit={ (e) => onSubmit(e) }
              validationSchema={ validationSchema }
            >
              {(props: FormikProps<IFormikProps>) => {
                const {
                  handleChange, errors
                } = props
   
                const buttonDisabled = !!errors.name || !!errors.email || !!errors.message
   
                return (
                  <Form>
                    <Grid
                      container
                      spacing={ 3 }
                    >
                      <Grid
                        item
                        xs={ 12 }
                        sm={ 6 }
                      >
                        <TextField 
                          error={ !!errors.name }
                          variant="outlined"
                          label="Name *"
                          name="name"
                          fullWidth
                          onChange={ handleChange }
                          classes={ {
                            root: styles.textRoot
                          } }
                          InputProps={ {
                            classes: {
                              focused: styles.focused,
                            },
                          } }
                        />
                      </Grid>
                      <Grid
                        item
                        xs={ 12 }
                        sm={ 6 }
                      >
                        <TextField
                          error={ !!errors.email }
                          variant="outlined"
                          label="Email *"
                          fullWidth
                          name="email"
                          type="email"
                          onChange={ handleChange }
                          InputProps={ {
                            classes: {
                              focused: styles.focused,
                            },
                          } }
                        />
                      </Grid>
                      <Grid
                        item
                        xs={ 12 }
                      >
                        <TextField 
                          error={ !!errors.message }
                          className={ styles.textArea }
                          variant="outlined"
                          label="Message *"
                          fullWidth
                          name="message"
                          type="text"
                          onChange={ handleChange }
                          multiline
                          minRows={ 10 }
                          InputProps={ {
                            classes: {
                              focused: styles.focused,
                              error: styles.inputError,
                            },
                          } }
                        />
                      </Grid>
                    </Grid>
                    <div className={ styles.buttonContainer }>
                      <Button 
                        className={ styles.button }
                        disabled={ buttonDisabled }
                        variant="contained"
                        size="large"
                        type="submit"
                        classes={ {
                          root: styles.buttonRoot,
                          contained: styles.contained,
                          outlined: styles.outlined,
                          containedPrimary: styles.containedPrimary,
                          containedSecondary: styles.containedSecondary,
                          outlinedPrimary: styles.outlinedPrimary,
                          outlinedSecondary: styles.outlinedSecondary,
                          label: styles.buttonText,
                        } }
                      >
                        {loading ? 'Sending...' : 'Send'}
                      </Button>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </>
        ) : (
          <div className={ styles.success }>
            <h2>{contactFields.successText}</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactPageComponent