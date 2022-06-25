
import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import { Fade } from 'react-reveal'
import PageBanner from '../../components/PageBanner'
import { createMarkup } from '../../../util'
import styles from './styles.module.scss'
import cn from 'classnames'

interface IAboutPageProps {
  data: any;
}

const AboutPageComponent: FC<IAboutPageProps> = ({ data }) => {
  const { wpPage } = data.data
  const { aboutPageFields, allPages } = data.data.wpPage

  return (
    <div className={ styles.about }>
      <PageBanner
        bannerImage={ allPages.pageBanner.sourceUrl }
        title={ wpPage.title }
      />
      <div className={ styles.main }>
        <h2 className={ styles.sectionTitle }>The Yard Recording Studio</h2>
        <Fade
          left
          distance="200px"
        >
          <Grid
            className={ cn(styles.item, styles.firstItem) }
            container
          >
            <Grid
              item
              className={ styles.imageContainer }
              xs={ 12 }
              sm={ 3 }
            >
              <div
                className={ styles.image }
                style={ { backgroundImage: `url("${aboutPageFields.blockOneImage.sourceUrl}")` } }
              >
              </div>
              <div className={ styles.box } />
            </Grid>
            <Grid
              item
              xs={ 12 }
              sm={ 9 }
            >
              <div
                className={ styles.boxText }
                dangerouslySetInnerHTML={ createMarkup(aboutPageFields.blockOneText) }
              />
            </Grid>
          </Grid>
        </Fade>

        <Fade
          right
          distance="200px"
        >
          <Grid
            className={ styles.item }
            container
          >
            <Grid
              item
              className={ styles.imageContainer }
              xs={ 12 }
              sm={ 3 }
            >
              <div
                className={ styles.image }
                style={ { backgroundImage: `url("${aboutPageFields.blockTwoImage.sourceUrl}")` } }
              >
              </div>
              <div className={ styles.box } />
            </Grid>
            <Grid
              item
              xs={ 12 }
              sm={ 9 }
            >
              <div
                className={ styles.boxText }
                dangerouslySetInnerHTML={ createMarkup(aboutPageFields.blockTwoText) }
              />
            </Grid>
          </Grid>
        </Fade>

        <div className={ styles.bioSection }>
          <h2 className={ styles.sectionTitle }>Who we are</h2>
          <Fade
            left
            distance="200px"
          >
            <Grid
              className={ cn(styles.item, styles.firstItem) }
              container
            >
              <Grid
                item
                className={ styles.imageContainer }
                xs={ 12 }
                sm={ 3 }
              >
                <div
                  className={ styles.image }
                  style={ { backgroundImage: `url("${aboutPageFields.alexImage.sourceUrl}")` } }
                >
                </div>
                <div className={ styles.box } />
              </Grid>
              <Grid
                item
                xs={ 12 }
                sm={ 9 }
              >
                <div
                  className={ styles.boxText }
                  dangerouslySetInnerHTML={ createMarkup(aboutPageFields.alexBio) }
                />
              </Grid>
            </Grid>
          </Fade>

          <Fade
            right
            distance="200px"
          >
            <Grid
              className={ styles.item }
              container
            >
              <Grid
                item
                className={ styles.imageContainer }
                xs={ 12 }
                sm={ 3 }
              >
                <div
                  className={ styles.image }
                  style={ { backgroundImage: `url("${aboutPageFields.fredImage.sourceUrl}")` } }
                >
                </div>
                <div className={ styles.box } />
              </Grid>
              <Grid
                item
                xs={ 12 }
                sm={ 9 }
              >
                <div
                  className={ styles.boxText }
                  dangerouslySetInnerHTML={ createMarkup(aboutPageFields.fredBio) }
                />
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default AboutPageComponent
