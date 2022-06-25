import React, { FC } from 'react'
import Masonry from 'react-masonry-css'
import { Fade } from 'react-reveal'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import  ImageModal from '../../components/ImageModal'
import actions from '../../../actions'

import styles from './styles.module.scss'

interface IGalleryPageContentProps {
  data: any;
}

const GalleryPageContent:FC<IGalleryPageContentProps> = ({
  data
}) => {
  const { allWpMediaItem } = data.data
  const isBrowser = typeof window !== "undefined"
  const breakpoints = useBreakpoint()
  const imageArr = allWpMediaItem.nodes
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  
  let columns = 3

  if (isBrowser) {
    switch(true) {
      case breakpoints.xs:
        columns = 1
        break
    
      case breakpoints.sm:
        columns = 2
        break
    
      case breakpoints.md:
        columns = 3
        break

      case breakpoints.lg:
        columns = 4
        break

      default:
        columns = 4
    }
  }

  return (
    <>
      <div className={ styles.masonryGridContainer }>
        <Masonry
          breakpointCols={ columns }
          className={ styles.masonryGrid }
          columnClassName={ styles.masonryGridColumn }
        >
          {imageArr.map((image) => (
            <div
              key={ image.id }
              className={ styles.imageContainer }
              onClick={ () => actions.AppService.handleModal(true, image.sourceUrl) }
            >
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
      <ImageModal />
    </>
  )
}

export default GalleryPageContent