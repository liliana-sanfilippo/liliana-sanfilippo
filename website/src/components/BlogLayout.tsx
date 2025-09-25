import { Link, Outlet, useLocation } from 'react-router-dom'
import React from 'react'

import siteMetadata from '../siteMetadata'
import NotFoundPage from './NotFoundPage'
import LoadingIndicator from './LoadingIndicator'
import styles from './BlogLayout.module.css'

interface BlogLayoutProps {
  blogRoot: string
  isViewingIndex: boolean
}

function BlogLayout({ blogRoot, isViewingIndex }: BlogLayoutProps) {
  //let location = useLocation()
  return (
    <div className={styles.container}>
        {/*}  <LoadingIndicator active={!!location} />*/}

      {// Don't show the header on index pages, as it has a special
      // header.
      !isViewingIndex && (
        <header>
          <h3 className={styles.title}>
            <Link to={blogRoot}>{siteMetadata.title}</Link>
          </h3>
        </header>
      )}

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default BlogLayout
