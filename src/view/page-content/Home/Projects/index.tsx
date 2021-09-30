import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

interface IProjectsComponentProps {
    projects: {
        uri: string;
        id: string;
        title: string;
        slug: string;
        featuredImage: {
            node: {
                altText: string;
                sourceUrl: string;
            }
        }
        projectsFields: {
          link: {
            url: string;
          }
        }
    }[]
}

const ProjectsComponent: FC<IProjectsComponentProps> = ({
  projects
}) => {  
  return (
    <div className={ styles.projects }>
      <h2 className={ styles.sectionTitle }>Our Projects</h2>
      <Grid
        container
        spacing={ 3 }
      >
        {projects.map((item) => {
          const { sourceUrl } = item.featuredImage.node
          const link = item.projectsFields && item.projectsFields.link ? item.projectsFields.link.url : ''

          return (
            <>
              <Grid
                item
                xs={ 12 }
                sm={ 6 }
                md={ 3 }
                key={ item.id }
              >
                <div className={ styles.projectBox }>
                  {link !== '' ? (
                    <Link
                      to={ link }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        className={ styles.projectImage }
                        style={ { backgroundImage: `url("${sourceUrl}")` } }
                      >
                        <div className={ styles.overlay }>
                          <h4>{item.title}</h4>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={ styles.projectImage }
                      style={ { backgroundImage: `url("${sourceUrl}")` } }
                    >
                      <div className={ styles.overlay }>
                        <h4>{item.title}</h4>
                      </div>
                    </div> 
                  )}
                </div>
              </Grid>
            </>
          )
        })}
      </Grid>
    </div>
  )
}

export default ProjectsComponent