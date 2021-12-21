
import React, { FC } from 'react'
import styles from './styles.module.scss'
import SocialLinks from '../../components/SocialLinks'
import { createMarkup } from '../../../util'

import ServicesComponent from './Services'
import ProjectsComponent from './Projects'
import ProfileComponent from './Profile'

interface IHomeScreenProps {
  data: any;
}

const HomePageComponent: FC<IHomeScreenProps> = ({ data }) => {
  const { homePageFields, allPages } = data.data.wpPage
  const { customSocialLinks } = data.data.allWpSocialLink.nodes[0]
  const { allWpService, allWpProject } = data.data
  const bannerUrl = `url("${allPages.pageBanner.sourceUrl}")`
  const getServices = homePageFields.bannerSubtitle.split(',')

  return (
    <div className={ styles.home }>
      <div
        className={ styles.banner }
        style={ { backgroundImage: bannerUrl } }
      >
        <div className={ styles.bannerOverlay }>
          <div className={ styles.bannerContent }>
            <div className={ styles.bannerInner }>
              {data.data.wpMediaItem && (
                <img
                  className={ styles.logo }
                  src={ data.data.wpMediaItem.mediaItemUrl }
                />
              )}
              <div className={ styles.servicesList }>
                {getServices.map((item: string) => (
                  <p key={ item }>{item}</p>
                ))}
              </div>
              <div className={ styles.socialLinks }>
                <SocialLinks links={ customSocialLinks } />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={ styles.main }>
        <div className={ styles.bioText }>
          <div
            className={ styles.text }
            dangerouslySetInnerHTML={ createMarkup(homePageFields.bioText) }
          />
        </div>
        <ServicesComponent services={ allWpService.nodes }/>
        <ProfileComponent profiles={ homePageFields }/>
        <ProjectsComponent projects={ allWpProject.nodes }/>
      </div>
    </div>
  )
}

export default HomePageComponent
