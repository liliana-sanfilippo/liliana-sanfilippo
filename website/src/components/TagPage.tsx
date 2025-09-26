import React from 'react'
import ArticleSummary from './ArticleSummary'
import styles from './TagPage.module.css'
import {Post} from "../routes/posts/post_interface";



interface TagPageProps {
    name: string
    routes: Post[]
}

function TagPage({ name, routes }: TagPageProps) {
  return (
    <div className={styles.TagPage}>
      <h1>{name} posts</h1>
      <ul>
        {routes.map(route => (
          <li key={route.slug}>
            <ArticleSummary blogRoot={"/"} post={route} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagPage
