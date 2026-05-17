import React from 'react'
import styles from './document.module.css'
import {LinkedInCarousel} from "../components/Carousels/LinkedInCarousel";
import {FLink, FurtherLinks} from "../components/FurtherLinks";

export const metajamboree2024 = {
    title: "Grand Jamboree 2024",
    tags: ["igem", "precyse", "award"],
    spoiler: "Title",
    slug: "jamboree-2024",
    date: new Date("2024-10-29"),
    image: "https://static.igem.wiki/teams/5247/photos/header/judging.webp",
    cc: "iGEM Foundation"
}

const linkedinposts_jamboree_24: string[] = ["https://www.linkedin.com/embed/feed/update/urn:li:share:7259238460971003904?collapsed=1", "https://www.linkedin.com/embed/feed/update/urn:li:share:7252608529297981442?collapsed=1", "https://www.linkedin.com/embed/feed/update/urn:li:share:7258151267380662274?collapsed=1", "https://www.linkedin.com/embed/feed/update/urn:li:share:7259600599707537408?collapsed=1", "https://www.linkedin.com/embed/feed/update/urn:li:share:7259834308335431680?collapsed=1"]

export const flinks_jamboree_24: FLink[] = [{
    text: "Hertz", url: "https://www.hertz879.de/nachrichten/forschungspreis-fuer-bielefelder-studierendenteam/"
}, {
    text: "Westfahlen Blatt",
    url: "https://www.westfalen-blatt.de/owl/bielefeld/therapieansatz-fuer-mukoviszidose-vier-preise-gehen-nach-bielefeld-3189405"
}]

export default function jamboree2024() {
    return (<div className={styles.Welcome}>
        <div className="row">
            <div className="col px-1">
                <iframe title="Bielefeld-CeBiTec: Judging Session (2024)" width="100%" height="315"
                        src="https://video.igem.org/videos/embed/sNAhZQeeZPNz6fCvnMPqmV" allow="fullscreen"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </div>
            <div className="col px-1">
                <iframe
                    title="PreCyse | Redefining Cystic Fibrosis Gene Therapy with Next-Generation mRNA-Based Prime Editing Technology"
                    width="100%" height="315" src="https://video.igem.org/videos/embed/1LY6MPTHNhxHUMD9uBbdQc"
                    allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </div>
        </div>

        <p>
            <div className="row align-items-center">
                <div className="col-5 mx-auto">
                    <img
                        src="https://live.staticflickr.com/65535/54134773544_6ea25298e8_6k.jpg"/>
                </div>
                <div className="col-5 mx-auto">
                    <img
                        src=""/>
                </div>
            </div>
        </p>

        <img
            src="https://live.staticflickr.com/65535/54107495703_5b7c967d20_6k.jpg"/>

        <img src="https://live.staticflickr.com/65535/54094217056_64eba7e7ef_6k.jpg"/>

        <img src={"https://github.com/user-attachments/assets/7a00dcce-d014-47df-a7da-aa0ab94fbf16"}/>

        <img src="https://live.staticflickr.com/65535/54107690830_ae3549c9c0_6k.jpg"/>
        <FurtherLinks flinks={flinks_jamboree_24}/>

    </div>)
}



// https://video.igem.org/w/sNAhZQeeZPNz6fCvnMPqmV?start=0s
// https://video.igem.org/w/1LY6MPTHNhxHUMD9uBbdQc