
import React, { FC } from 'react'
import { Fade } from 'react-reveal'
import Masonry from 'react-masonry-css'
import PageBanner from '../../components/PageBanner'
import { createMarkup } from '../../../util'
import styles from './styles.module.scss'

interface IStudioPageComponentProps {
    data: any;
}

const StudioPageComponent: FC<IStudioPageComponentProps> = ({ data }) => {
  const { wpPage, allWpMediaItem } = data.data

  return (
    <div className={ styles.studio }>
      <PageBanner
        bannerImage={ wpPage.allPages.pageBanner.sourceUrl }
        title={ wpPage.title }
      />
      <div className={ styles.main }>
        <div dangerouslySetInnerHTML={ createMarkup(wpPage.content) } />
      </div>

      <div className={ styles.masonryGridContainer }>
        <Masonry
          breakpointCols={ 3 }
          className={ styles.masonryGrid }
          columnClassName={ styles.masonryGridColumn }
        >
          {allWpMediaItem.nodes.map((image) => (
            <div key={ image.id }>
              <Fade
                left
                distance="200px"
              >
                <img
                  src={ image.sourceUrl }
                />
              </Fade>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default StudioPageComponent
