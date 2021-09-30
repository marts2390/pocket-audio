import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import { Fade } from 'react-reveal'
import { createMarkup } from '../../../../util'
import styles from './styles.module.scss'
import cn from 'classnames'

interface IProfileComponentProps {
    profiles: {
        profilePicOne: {
            altText: string;
            sourceUrl: string;
        };
        profileText1: string;
        profilePicTwo: {
            altText: string;
            sourceUrl: string;
        };
        profileText2: string;
    }
}

const ProfileComponent: FC<IProfileComponentProps> = ({
  profiles
}) => {
  const profileArr = [
    {
      profileImage: profiles.profilePicOne,
      profileText: profiles.profileText1
    },
    {
      profileImage: profiles.profilePicTwo,
      profileText: profiles.profileText2
    },
  ]

  return (
    <div className={ styles.profileSection }>
      <h2 className={ styles.sectionTitle }>Who are we</h2>
      <Fade
        left
        distance="200px"
      >
        <Grid
          className={ cn(styles.profileItem, styles.firstItem) }
          container
        >
          <Grid
            key={ profileArr[0].profileImage.sourceUrl }
            item
            className={ styles.imageContainer }
            xs={ 12 }
            sm={ 3 }
          >
            <div
              className={ styles.profileImage }
              style={ { backgroundImage: `url("${profileArr[0].profileImage.sourceUrl}")` } }
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
              dangerouslySetInnerHTML={ createMarkup(profileArr[0].profileText) }
            />
          </Grid>
        </Grid>
      </Fade>

      <Fade
        right
        distance="200px"
      >
        <Grid
          className={ styles.profileItem }
          container
        >
          <Grid
            key={ profileArr[1].profileImage.sourceUrl }
            item
            className={ styles.imageContainer }
            xs={ 12 }
            sm={ 3 }
          >
            <div
              className={ styles.profileImage }
              style={ { backgroundImage: `url("${profileArr[1].profileImage.sourceUrl}")` } }
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
              dangerouslySetInnerHTML={ createMarkup(profileArr[1].profileText) }
            />
          </Grid>
        </Grid>
      </Fade>
    </div>
  )
}

export default ProfileComponent