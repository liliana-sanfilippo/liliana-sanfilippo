import {Outlet} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import {Navbar} from "../navComponents/Navbar";
import {Footer} from "../navComponents/Footer";
import DynamicBreadcrumb from "./DynamicBreadcrumb";
import {handleNavigation} from "@liliana-sanfilippo/react-link";

function BlogLayout() {
    const [navbarHeight, setNavbarHeight] = useState(0);
    useEffect(() => {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight + 10);
        }
    }, []);
    handleNavigation();
    return (<>
        <Navbar></Navbar>

        <main style={{paddingTop: `${navbarHeight}px`}} className={"mx-auto"}>
            <DynamicBreadcrumb/>
            <Outlet/>
        </main>
        <Footer></Footer>

    </>)
}

export default BlogLayout
