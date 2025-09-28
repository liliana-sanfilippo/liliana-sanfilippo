import React, {useEffect, useState} from 'react'
import styles from './document.module.css'
import ExternalMeta from "../../More components/getUniBlog";
import UniBlog from "../../More components/getUniBlog";

export const metauniBlogPrecyse1 = {
    title: "External Blog: Students conduct research into gene therapy for cystic fibrosis",
    tags: ["igem", "precyse", "external"],
    spoiler: "An interdisciplinary student research team at Bielefeld University is improving a gene" +
        " therapy for the treatment of cystic fibrosis, one of the world's most common genetic diseases.",
    slug: "uni-blog-precyse",
    date: new Date("2024-10-15"),
    cc: "© Universität Bielefeld/Team Medienpraxis",
    image: "https://aktuell.uni-bielefeld.de/wp-content/uploads/2024/10/iGem_aktuellBild-1024x576.jpg"
}

export default function uniBlogPrecyse1() {


    return (
        <div className={styles.Welcome}>
            <UniBlog url="https://aktuell.uni-bielefeld.de/2024/10/15/studierende-forschen-an-gentherapie-fuer-mukoviszidose/"></UniBlog>

        </div>
    )
}
