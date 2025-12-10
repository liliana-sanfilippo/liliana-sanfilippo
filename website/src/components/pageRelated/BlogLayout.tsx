import {Outlet} from 'react-router-dom'
import React from 'react'
import {Navbar} from "../navComponents/Navbar";
import {Footer} from "../navComponents/Footer";
import Container from "react-bootstrap/Container";


function BlogLayout() {
    return (<>
        <Container>
            <Navbar/>
            <header>
            </header>
            <div id={"main-wrapper"}>
                <div className="col-12">

                    <main>
                        <Outlet/>
                    </main>
                </div>
            </div>
            <Footer></Footer>

        </Container>
    </>)
}

export default BlogLayout
