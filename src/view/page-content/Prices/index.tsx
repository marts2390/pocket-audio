
import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import { Fade } from 'react-reveal'
import PageBanner from '../../components/PageBanner'
import { createMarkup } from '../../../util'
import styles from './styles.module.scss'
import cn from 'classnames'

interface IPriceListComponentProps {
  data: any;
}

const PriceListComponent: FC<IPriceListComponentProps> = ({ data }) => {
  const { wpPage } = data.data
  const { allPages } = data.data.wpPage

  return (
    <div className={ styles.about }>
      <PageBanner
        bannerImage={ allPages.pageBanner.sourceUrl }
        title={ wpPage.title }
      />

      <div className={ styles.main }>
        <h2 className={ styles.title }>Recording / Mixing / Mastering / Sessions</h2>
        <div className={ styles.priceItem }>
          <h4>8 hour recording day - <span>£240</span></h4>
        </div>
        <div className={ styles.priceItem }>
          <h4>Mastering - <span>£30 per track</span> </h4>
        </div>
        <div className={ styles.priceItem }>
          <h4>Mixing - <span>£25ph</span></h4>
          <p>Overall mixing time does vary based on the size of project, however you will be given a rough estimate before we begin.</p>
        </div>
        <div className={ styles.priceItem }>
          <h4>Songwriting and production</h4>
          <p>Are you a solo artist looking for a full production? We can help you to create something new and fresh. We also can provide many experienced session musicians that work regularly for the Yard family. <a href="/contact">Get in touch</a> and set up a meeting to discuss your Project.</p>
        </div>
        <div className={ styles.priceItem }>
          <h4>Deals - EP deals / Album Deals / Student Deals</h4>
          <p><a href="/contact">Get in touch</a> for a quote!</p>
        </div>

      </div>
    </div>
  )
}

export default PriceListComponent
