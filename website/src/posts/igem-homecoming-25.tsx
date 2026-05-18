import React from 'react'
import styles from './document.module.css'
import {ImageWrapper} from "../components/media/ImageWrapper";

export const metaIgemHomecoming25 = {
    title: "Homecoming 2025",
    tags: ["igem", "cellective"],
    spoiler: "",
    slug: "igem-homecoming-2025",
    date: new Date("2025-12-08"),
    image: "https://live.staticflickr.com/65535/54973525712_b60a71124f_c.jpg",
    cc: "Liliana Sanfilippo"
}


export default function IgemHomecoming25() {
    return (<div className={styles.Welcome}>
        <ImageWrapper
            src={"https://live.staticflickr.com/65535/54974595808_268778b85b_c.jpg"}
        />
        <ImageWrapper
            src={"https://live.staticflickr.com/65535/54973525712_b60a71124f_c.jpg"}
        />
    </div>)
}