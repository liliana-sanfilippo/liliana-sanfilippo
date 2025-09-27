import React from 'react'
import styles from './document.module.css'
import {LinkedInCarousel} from "../../More components/LinkedInCarousel";

export const metabfh2024 = {
    title: "BFH European MeetUp 2024",
    tags: ["bfh", "igem"],
    spoiler: "Title",
    slug: "bfh-2024",
    date: new Date("2024-05")
}

const linkedinposts: string[] = [
"https://www.linkedin.com/embed/feed/update/urn:li:share:7188957114109673472?collapsed=1",
"https://www.linkedin.com/embed/feed/update/urn:li:share:7199356996272226304?collapsed=1",
"https://www.linkedin.com/embed/feed/update/urn:li:share:7327651774222274561?collapsed=1"
]

export default function bfh2024() {
    return (
        <div className={styles.Welcome}>

            <div className="row align-items-center">
                <div className="col-7 m-auto">
                    <iframe title="Bielefeld-CeBiTec: BFH European Meet-up (2024) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/2G8U94Ubp6bCK5abA8Gu89" allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>

                </div>

            </div>


           <LinkedInCarousel urls={linkedinposts}/>
        </div>
    )
}
