import React from 'react'
import styles from './document.module.css'

export const metaAidareWebsiteLaunch = {
    title: "AIDARE website goes live",
    tags: ["aidare"],
    spoiler: "",
    slug: "aidare-website-launch",
    date: new Date("2025-09-22"),
    image: "https://live.staticflickr.com/65535/54974360240_1d7ec6057b_c.jpg",
    cc: "AIDARE"
}

export default function AidareWebsiteLaunch() {
    return (<div className={styles.Welcome}>

        <div className="row align-items-center">
            <iframe className="m-auto"
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7376158271956750336" height="1253"
                    width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>

        </div>
    </div>)
}
