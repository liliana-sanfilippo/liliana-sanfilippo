import React from 'react'
import styles from './document.module.css'
import {LinkedInCarousel} from "../../components/Carousels/LinkedInCarousel";
import {linkedinposts25} from "../../data/bfh/bfh-socials-2025";

export const metabfh2025 = {
    title: "BFH European MeetUp 2025",
    tags: ["bfh", "igem", "meetup"],
    spoiler: "",
    slug: "bfh-2025",
    date: new Date("2025-05"),
    image: "https://static.igem.org/websites/community/2025/images/events/ambassadors-regions/europe/igem-at-2025-bfh-euorpean-meetup-2.webp",
    cc: "BFH European MeetUp"
}


export default function bfh2025() {
    return (<div className={styles.Welcome}>

        <LinkedInCarousel urls={linkedinposts25}/>


    </div>)
}
