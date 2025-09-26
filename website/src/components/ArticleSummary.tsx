import React from 'react'
import ArticleMeta from './ArticleMeta'
import styles from './ArticleSummary.module.css'
import { Link } from 'react-router-dom'
import {Post} from "../routes/posts/post_interface";






function ArticleSummary({ blogRoot, post }: {blogRoot: string, post: Post}) {
  return (
    <article className={styles.ArticleSummary}>
      <h5>
        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
      </h5>
      <ArticleMeta blogRoot={blogRoot} data={post} />
      <p>{post.spoiler}</p>
    </article>
  )
}

export default ArticleSummary
