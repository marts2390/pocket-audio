import React, { FC } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'
import SoundCloudIcon from '../../icons/SoundCloudIcon'
import cn from 'classnames'
import styles from './styles.module.scss'

interface ISocialLinksProps {
  links: {
    facebook: string | null;
    twitter: string | null;
    soundcloud: string | null;
    youtube: string | null;
    instagram: string | null;
  }
}

const SocialLinks:FC<ISocialLinksProps> = ({
  links
}) => {
  const socialItems = [
    {
      name: 'facebook',
      icon: <FacebookIcon />,
      link: links.facebook,
    },
    {
      name: 'instagram',
      icon: <InstagramIcon />,
      link: links.instagram,
    },
    {
      name: 'youtube',
      icon: <YouTubeIcon />,
      link: links.youtube,
    },
    {
      name: 'twitter',
      icon: <TwitterIcon />,
      link: links.twitter,
    },
    {
      name: 'soundcloud',
      icon: <SoundCloudIcon />,
      link: links.soundcloud,
    },
  ]

  const removeNullItems = socialItems.filter((item) => item.link !== null)

  return (
    <div className={ styles.socialLinks }>
      {removeNullItems.map((item) => (
        <a
          key={ item.link }
          target="_blank"
          className={ cn(styles.socialItem, { [styles.soundCloud]: item.name === 'soundcloud' }) }
          href={ item.link ? item.link : '' }
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks