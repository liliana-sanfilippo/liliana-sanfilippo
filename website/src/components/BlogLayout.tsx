import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import siteMetadata from '../siteMetadata'
import styles from './BlogLayout.module.css'
import {Navbar} from "./Navbar";
import {BlogSidebar} from "../More components/BlogSidebar";
import posts from "../routes/posts";



interface BlogLayoutProps {
  blogRoot: string
  isViewingIndex: boolean
}

function BlogLayout({ blogRoot}: BlogLayoutProps) {
  return (
      <>
    <div className={styles.container}>
        <Navbar />
        <header>
          <h3 className={styles.title}>
            <Link to={blogRoot}>{siteMetadata.title}</Link>
          </h3>
          <div className="row">
              <div className="col-3">
                  <BlogSidebar postRoutes={posts}></BlogSidebar>
              </div>
              <div className="col-8">
                  <main>
                      <Outlet />
                  </main>
              </div>
          </div>
        </header>



    </div>
      </>
  )
}

export default BlogLayout
