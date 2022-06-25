import React, { FC, useState } from 'react'
import PageBanner from '../../components/PageBanner'
import { Formik, Form, FormikProps, useFormik } from 'formik'
import { TextField, Grid } from '@material-ui/core'
import Button from '../../components/Button'
import { createMarkup } from '../../../util'
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

  const initialValues: IFormikProps = {
    name: '',
    email: '',
    message: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    message: Yup.string().required('Required'),
  })

  const onSubmit = async (e: IFormikProps, resetForm: () => void) => {
    setLoading(true)
    try {
      await fetch(
        'https://getform.io/f/86e987d2-19f6-43e7-a401-f943b9368893',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: e.name,
            email: e.email,
            message: e.message,
          })
        }
      )
    } catch(err) {
      console.log(err)
      setError(true)
      setLoading(false)

      return
    }

    setLoading(false)
    setSent(true)
    resetForm()
  }

  return (
    <div className={ styles.contact }>
      <PageBanner
        bannerImage={ allPages.pageBanner.sourceUrl }
        title={ wpPage.title }
      />
      <div className={ styles.main }>
        <>
          <div
            className={ styles.content }
            dangerouslySetInnerHTML={ createMarkup(wpPage.content) }
          />
          <div className={ styles.form }>
            <Formik
              initialValues={ initialValues }
              onSubmit={ (e, { resetForm }) => {
                onSubmit(e, resetForm)
              } }
              validationSchema={ validationSchema }
            >
              {(props: FormikProps<IFormikProps>) => {
                const {
                  handleChange, errors, values
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
                          variant="filled"
                          label="Name *"
                          name="name"
                          value={ values.name }
                          fullWidth
                          onChange={ handleChange }
                          classes={ {
                            root: styles.textRoot,
                          } }
                          InputProps={ {
                            classes: {
                              root: styles.inputRoot,
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
                          variant="filled"
                          label="Email *"
                          fullWidth
                          name="email"
                          type="email"
                          value={ values.email }
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
                          variant="filled"
                          label="Message *"
                          fullWidth
                          name="message"
                          type="text"
                          value={ values.message }
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
                    {error && (
                      <div  className={ styles.errorMessage }>
                        <h2>Oops looks like something went wrong, please try again</h2>
                      </div>
                    )}
                    {sent && (
                      <div className={ styles.success }>
                        <h2>{contactFields.successText}</h2>
                      </div>
                    )}
                    <div className={ styles.buttonContainer }>
                      <Button
                        className={ styles.submitButton }
                        type='submit'
                        buttonDisabled={ buttonDisabled }
                      >
                        {loading ? 'Sending...' : 'Send'}
                      </Button>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </>
      </div>
    </div>
  )
}

export default ContactPageComponent