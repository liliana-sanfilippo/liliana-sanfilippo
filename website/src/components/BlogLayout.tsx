import { Outlet } from 'react-router-dom'
import React from 'react'
import styles from './BlogLayout.module.css'
import {Navbar} from "./Navbar";
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
              <div className="col-12">

                  <main>
                      <Outlet />
                  </main>
              </div>
          </div>
        <Footer></Footer>

    </Container>
      </>
  )
}

export default BlogLayout
