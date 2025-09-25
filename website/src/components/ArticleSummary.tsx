import React from 'react'
import ArticleMeta from './ArticleMeta'
import styles from './ArticleSummary.module.css'
import {Route} from "./Route";




interface ArticleSummaryProps {
  blogRoot: string
  route: Route
}

function ArticleSummary({ blogRoot, route }: ArticleSummaryProps) {
  return (
    <article className={styles.ArticleSummary}>
      <h2>
        <a href={route.url.href}>{route.title}</a>
      </h2>
      <ArticleMeta blogRoot={blogRoot} data={route} />
      <p>{route.data.spoiler}</p>
    </article>
  )
}

export default ArticleSummary
