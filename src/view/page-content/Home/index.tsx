
import React, { FC } from 'react'
import styles from './styles.module.scss'
import Button from '../../components/Button'
import promoVideo from '../../../images/promo-vid.mp4'
import { Link } from 'gatsby'
import { Fade } from '@material-ui/core'

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
        <Fade in>
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
        </Fade>
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
            <h2>Recording Studio in the heart of Brighton and Hove</h2>
            <h4>OUR ethos at The Yard is to bring our expertise to every project and go the extra mile to 
              achieve the best possible results. We work closely with a range of creatives, offering 
              bespoke services in a comfortable and relaxed environment.</h4>
            <p>Drawing on over twenty years of experience, we take a unique and tailored approach when 
              working with the array of artists and bands who come through our door.</p>
            <p>If you have a vision for your music, we’re here to help you capture it!</p>
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
