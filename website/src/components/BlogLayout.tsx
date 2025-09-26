import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import siteMetadata from '../siteMetadata'
import styles from './BlogLayout.module.css'
import {Navbar} from "./Navbar";
import {BlogSidebar} from "../More components/BlogSidebar";
import posts from "../routes/posts";
import {Footer} from "../More components/Footer";
import Container from "react-bootstrap/Container";



function BlogLayout() {
  return (
      <>
    <Container className={styles.container}>
        <Navbar />
        <header>
        </header>
          <div className="row">
              <div className="col-9">
                  <h3 className={styles.title}>
                      <Link to={"/"}>{siteMetadata.title}</Link>
                  </h3>
                  <main>
                      <Outlet />
                  </main>
              </div>
              <div className="col-3">
                  <BlogSidebar postRoutes={posts}></BlogSidebar>
              </div>
          </div>
        <Footer></Footer>

    </Container>
      </>
  )
}

export default BlogLayout
