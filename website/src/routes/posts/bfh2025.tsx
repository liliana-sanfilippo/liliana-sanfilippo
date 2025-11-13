import React from 'react'
import styles from './document.module.css'
import Carousel from "react-bootstrap/Carousel";
import {LinkedInCarousel} from "../../More components/LinkedInCarousel";

export const metabfh2025 = {
    title: "BFH European MeetUp 2025",
    tags: ["bfh", "igem", "meetup"],
    spoiler: "",
    slug: "bfh-2025",
    date: new Date("2025-05"),
    image: "https://static.igem.org/websites/community/2025/images/events/ambassadors-regions/europe/igem-at-2025-bfh-euorpean-meetup-2.webp",
    cc: "BFH European MeetUp"
}

const linkedinposts: string[] =[
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7327651774222274561?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7332069958824120320?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7321528257340661760?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7332782650052460545?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7323767312862375936?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7321481093340147714?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7326158833989427201?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7314278924107055104?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7327638841878614017?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7321803924863139840?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7321528257340661760?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7323982370477412353?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7321992195010412544?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7327651774222274561?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325503624627806209?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7322898272711237633?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7329220075939373059?collapsed=1"
]

export default function bfh2025() {
    return (
        <div className={styles.Welcome}>

            <LinkedInCarousel urls={linkedinposts}/>


        </div>
    )
}
