import React, {useEffect, useRef} from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link as OurLink} from '@liliana-sanfilippo/react-link';
import {Link} from 'react-router-dom';
import {NavigationBar} from "./navigationBar";
import siteMetadata from "../../siteMetadata";

export function Navbar() {
    const navbarCollapseRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressImageRef = useRef<HTMLImageElement>(null);
    let scrollTimeout: NodeJS.Timeout;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

            // Balkenbreite setzen
            if (progressBarRef.current) {
                progressBarRef.current.style.width = `${scrollPercentage}%`;
            }

            // Timeout für Animation
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (progressImageRef.current) {
                    progressImageRef.current.classList.remove('walking');
                    progressImageRef.current.style.transform = 'translateY(0)';
                }
            }, 1000);
        };

        const onLoad = () => {
            handleScroll(); // initial aufrufen
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', onLoad);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', onLoad);
            clearTimeout(scrollTimeout);
        };
    }, []);

    useEffect(() => {
        const handleLinkClick = (event: Event) => {
            if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
                const target = event.target as HTMLElement;
                if (target.closest('.dropdown-text')) {
                    navbarCollapseRef.current.classList.remove('show');
                }
            }
        };

        const links = document.querySelectorAll('.navbar-text');
        links.forEach(link => link.addEventListener('click', handleLinkClick));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleLinkClick));
        };
    }, []);

    const pages = NavigationBar.map((item, pageIndex) => {
        if ("folder" in item && item.folder) {
            const folderItems = item.folder.map((subpage, subpageIndex) => {
                if (subpage.path) {
                    return (<NavDropdown.Item
                        as={Link}
                        to={subpage.path}
                        key={`subpage-${pageIndex}-${subpageIndex}`}>
                        {subpage.name}
                    </NavDropdown.Item>);
                }
                return null;
            });
            return (<NavDropdown
                key={`page-${pageIndex}`}
                title={item.name}
                id="basic-nav-dropdown"

            >
                {folderItems}
            </NavDropdown>);
        } else if ("path" in item && item.path) {
            return (<OurLink

                text={item.name}

                page={item.path}

                key={`page-${pageIndex}`}

                classes='nav-link'

            />);
        }
        return null;
    });

    return (<BootstrapNavbar
        className="p-0"
        expand="lg"
        bg="bg-transparent"
        fixed="top"
    >
        <Container className={"h-100"}>
            <BootstrapNavbar.Brand href="/" className={"py-4 px-5"}>
                {siteMetadata.title}
            </BootstrapNavbar.Brand>

            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav"/>
            <BootstrapNavbar id="basic-navbar-nav" ref={navbarCollapseRef}>
                <Nav className="ms-auto px-5">{pages}</Nav>
            </BootstrapNavbar>

            {/* Scroll Progress mit Maskottchen */}
            <div className="scroll-progress" ref={progressBarRef}>

            </div>
        </Container>
    </BootstrapNavbar>);
}
