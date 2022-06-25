
import React, { FC } from 'react'
import styles from './styles.module.scss'
import Button from '../../components/Button'
import promoVideo from '../../../assets/promo-vid.mp4'
import { Link } from 'gatsby'

import ServicesComponent from './Services'
import ProjectsComponent from './Projects'
import SocialLinks from '../../components/SocialLinks'

interface IHomeScreenProps {
  data: any;
}

const HomePageComponent: FC<IHomeScreenProps> = ({ data }) => {
  // const { allPages } = data.data.wpPage
  const { allWpService, allWpProject, wpMediaItem, allWpSocialLink } = data.data
  const { mediaItemUrl } = wpMediaItem
  // const bannerUrl = `url("${allPages.pageBanner.sourceUrl}")`

  return (
    <div className={ styles.home }>
      <div
        className={ styles.banner }
        // style={ { backgroundImage: bannerUrl } }
      >
        <video
          className={ styles.video }
          loop
          autoPlay
          muted
        >
          <source
            src={ promoVideo }
            type="video/mp4"
          />
        </video>
        <div className={ styles.bannerOverlay }>
          <div className={ styles.bannerContent }>
            <div className={ styles.bannerInner }>
              {wpMediaItem && (
                <img
                  className={ styles.textLogo }
                  src={ mediaItemUrl }
                />
              )}
              <h1>Recording. Mixing. Mastering.</h1>
              <Link
                to="/contact"
                className={ styles.bannerButton }
              >
                <Button
                  type="button"
                  variant='outlined'
                >Get in touch</Button>
              </Link>
              <div className={ styles.socialLinks }>
                <SocialLinks links={ allWpSocialLink.nodes[0].customSocialLinks }/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={ styles.main }>
        <div className={ styles.bioText }>
          <div className={ styles.text } >
            <h2>Professional Recording Studio in the heart of Brighton and Hove</h2>
            <h4>Led by professional producer / musician / engineer Alex Barron</h4>
            <h4>We provide services for Musicians, Audio Engineers, Composition, Remote sessions 
              and bespoke recording sessions for all creatives.</h4>
            <p>For the past ten years we have been working with an array of artists of all genres, 
              post production services, library music and so much more.</p>
            <p>We take pride in our work here and will go the extra mile to ensure that 
              we provide the highest quality services.</p>
            <p>ASSISTED BY FRED HILLS - PROFESSIONAL DRUMMER / COMPOSER / COLLABORATOR</p>
          </div>
        </div>
        <div className={ styles.services }>
          <ServicesComponent services={ allWpService.nodes } />
        </div>
        <ProjectsComponent projects={ allWpProject.nodes } />
      </div>
    </div>
  )
}

export default HomePageComponent
