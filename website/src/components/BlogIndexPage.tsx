import React from 'react'
import siteMetadata from '../siteMetadata'
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
}: BlogIndexPageProps) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link to={blogRoot}>{siteMetadata.title}</Link>
        </h1>

      </header>

      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
    </div>
  )
}

export default BlogIndexPage
