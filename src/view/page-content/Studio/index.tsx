
import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import PageBanner from '../../components/PageBanner'
import { createMarkup } from '../../../util'
import styles from './styles.module.scss'

interface IStudioPageComponentProps {
  data: any;
}

const StudioPageComponent: FC<IStudioPageComponentProps> = ({ data }) => {
  const { wpPage } = data.data
  const { 
    listOneList, 
    listTwoList, 
    listThreeList, 
    listOneTitle, 
    listTwoTitle, 
    listThreeTitle, 
    listFourTitle, 
    listFourList 
  } = wpPage.studioPageFields

  const gearList = [{
    title: listOneTitle,
    list: listOneList.split(';'),
  }, 
  {
    title: listTwoTitle,
    list: listTwoList.split(';'),
  }, 
  {
    title: listThreeTitle,
    list: listThreeList.split(';'),
  },
  {
    title: listFourTitle,
    list: listFourList.split(';'),
  }]

  return (
    <div className={ styles.studio }>
      <PageBanner
        bannerImage={ wpPage.allPages.pageBanner.sourceUrl }
        title={ wpPage.title }
      />
      <div className={ styles.main }>
        <h2 className={ styles.sectionTitle }>Our Gear</h2>
        <div
          className={ styles.content }
          dangerouslySetInnerHTML={ createMarkup(wpPage.content) }
        />
        <Grid
          container
          className={ styles.gearLists }
          spacing={ 4 }
        >
          {gearList.map((item) => (
            <Grid
              key={ item.list }
              item
              sm={ 6 }
            >
              <div
                className={ styles.gearListItem }
              >
                <h2>{item.title}</h2>
                <ul>
                  {item.list.map((listItem: string) => (
                    <li key={ listItem }>{listItem}</li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default StudioPageComponent
