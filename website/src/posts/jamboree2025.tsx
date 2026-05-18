import React from 'react'
import styles from './document.module.css'

export const metajamboree2025 = {
    title: "Grand Jamboree 2025",
    tags: ["igem", "cellective", "award", "bfh"],
    spoiler: "Title",
    slug: "jamboree-2025",
    date: new Date("2025-11"),
    image: "https://live.staticflickr.com/65535/54906126378_ee509e66a2_b.jpg",
    cc: "iGEM Foundation"
}

export default function Jamboree2025() {
    return (<div className={styles.Welcome}>
        <iframe title="BFH European Meetup: How to Host a Successful Meetup" width="560" height="315"
                src="https://video.igem.org/videos/embed/e36UnJvud2WWrv8a1pxPwL" style={{border: "0px"}}
                allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>

    </div>)
}
