import React, {useEffect, useState} from 'react'
import styles from './document.module.css'
import ExternalMeta from "../../More components/getMeta";
import ExternalMain from "../../More components/getMeta";

export const metauniBlogPrecyse2 = {
    title: "Four gold medals for Bielefeld iGEM team",
    tags: ["igem", "precyse"],
    spoiler: "An interdisciplinary team of students from Bielefeld University won four prizes at the 2024 International Genetically Engineered Machine (iGEM) competition in Paris with their own project for treating the hereditary disease cystic fibrosis.",
    slug: "uni-blog-precyse-preise",
    date: new Date("2024-11-04")
}

export default function uniBlogPrecyse2() {


    return (
        <div className={styles.Welcome}>
            <ExternalMain url="https://aktuell.uni-bielefeld.de/2024/11/05/vierfach-gold-fuer-bielefelder-igem-team/"></ExternalMain>

        </div>
    )
}
