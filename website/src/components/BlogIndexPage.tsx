import React from 'react'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'
import { Link } from 'react-router-dom'
import {Post} from "../routes/posts/post_interface";



interface BlogIndexPageProps {
  blogRoot: string
  pageCount: number
  pageNumber: number
  postRoutes: Post[]
}


function BlogIndexPage({
  blogRoot,
  pageCount,
  pageNumber,
  postRoutes,
}: BlogIndexPageProps) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link to={blogRoot}>{siteMetadata.title}</Link>
        </h1>
        <Bio />
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.slug}>
            <ArticleSummary blogRoot={blogRoot} post={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        <div>
          <Link to="./home">About</Link> &bull;{' '}
          <Link to="./tags">Tags</Link>
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage
