import React from 'react'
import ArticleSummary from './ArticleSummary'
import styles from './TagPage.module.css'
import {PageData} from "../interface";


interface TagPageProps {
  blogRoot: string
  name: string
  routes: PageData[]
}

function TagPage({ blogRoot, name, routes }: TagPageProps) {
  return (
    <div className={styles.TagPage}>
      <h1>{name} posts</h1>
      <ul>
        {routes.map(route => (
          <li key={route.url}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagPage
