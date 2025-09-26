import { useEffect, useRef, useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link as OurLink } from '@liliana-sanfilippo/react-link';
import { Link } from 'react-router-dom';
import {NavigationBar} from "../More components/navigationBar";

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

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const pages = NavigationBar.map((item, pageIndex) => {
        const isOpen = openIndex === pageIndex;

        const showDropdown = () => setOpenIndex(pageIndex);
        const hideDropdown = () => setOpenIndex(null);

        if ("folder" in item && item.folder) {
            const folderItems = item.folder.map((subpage, subpageIndex) => {
                if (subpage.path) {
                    return (
                        <OurLink
                            text={subpage.name}
                            page={subpage.path}
                            classes='dropdown-item'
                            key={`subpage-${pageIndex}-${subpageIndex}`}
                        />
                    );
                }
                return null;
            });
            return (
                <NavDropdown
                    key={`page-${pageIndex}`}
                    title={item.name}
                    show={isOpen}
                    id="basic-nav-dropdown"
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                >
                    {folderItems}
                </NavDropdown>
            );
        } else if ("path" in item && item.path) {
            return (
                <OurLink

                    text={item.name}

                    page={item.path}

                    key={`page-${pageIndex}`}

                    classes='nav-link'

                />
            );
        }
        return null;
    });

    return (
        <BootstrapNavbar
            className="navbar-custom"
            expand="lg"
            bg="bg-transparent"
            fixed="top"
        >
            <Container>
                <BootstrapNavbar.Brand>
                    <div className="row">
                        <div className="col" style={{ width: "fit-content" }}>
                            <Link to="/home">
                             Home
                            </Link>
                        </div>
                    </div>
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav" ref={navbarCollapseRef}>
                    <Nav className="ms-auto">{pages}</Nav>
                </BootstrapNavbar.Collapse>

                {/* Scroll Progress mit Maskottchen */}
                <div className="scroll-progress" ref={progressBarRef}>

                </div>
            </Container>
        </BootstrapNavbar>
    );
}
