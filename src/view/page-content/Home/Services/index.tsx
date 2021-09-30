import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import { createMarkup } from '../../../../util'
import { GiGuitarHead, GiFilmProjector } from 'react-icons/gi'
import { FaDrum } from 'react-icons/fa'
import { BsSpeaker } from 'react-icons/bs'
import { IoRecordingSharp } from 'react-icons/io5'
import { MdLiveTv } from 'react-icons/md'
import Fade from 'react-reveal/Fade'
import styles from './styles.module.scss'

interface IServicesProps {
  services: {
    id: string;
    excerpt: string;
    title: string;
  }[]
}

const ServicesComponent: FC<IServicesProps> = ({
  services
}) => {

  const servicesArray = [
    {
      id: services[0].id,
      content: services[0].excerpt,
      title: services[0].title,
      icon: <GiGuitarHead />,
    },
    {
      id: services[1].id,
      content: services[1].excerpt,
      title: services[1].title,
      icon: <MdLiveTv />,
    },
    {
      id: services[2].id,
      content: services[2].excerpt,
      title: services[2].title,
      icon: <FaDrum />,
    },
    {
      id: services[3].id,
      content: services[3].excerpt,
      title: services[3].title,
      icon: <GiFilmProjector />,
    },
    {
      id: services[4].id,
      content: services[4].excerpt,
      title: services[4].title,
      icon: <BsSpeaker />,
    },
    {
      id: services[5].id,
      content: services[5].excerpt,
      title: services[5].title,
      icon: <IoRecordingSharp />,
    },
  ]
  return (
    <Fade
      left
      distance="100px"
    >
      <div
        className={ styles.services }
      >
        <Grid
          container
          spacing={ 3 }
        >
          {servicesArray.map((item) => (
            <Grid
              key={ item.id }
              item
              xs={ 6 }
              sm={ 4 }
            >
              <div className={ styles.servicesItem }>
                {item.icon}
                <div dangerouslySetInnerHTML={ createMarkup(item.content) } />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Fade>
  )
}

export default ServicesComponent