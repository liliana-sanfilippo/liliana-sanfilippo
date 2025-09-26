import { Link, Outlet } from 'react-router-dom'
import React from 'react'

import siteMetadata from '../siteMetadata'
import styles from './BlogLayout.module.css'
import {Navbar} from "./Navbar";


interface BlogLayoutProps {
  blogRoot: string
  isViewingIndex: boolean
}

function BlogLayout({ blogRoot, isViewingIndex }: BlogLayoutProps) {
  //let location = useLocation()
  return (
      <>
      <Navbar />
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
      </>
  )
}

export default BlogLayout
