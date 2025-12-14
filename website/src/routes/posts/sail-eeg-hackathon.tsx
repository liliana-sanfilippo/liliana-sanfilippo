import React from 'react'
import styles from './document.module.css'
import {ImageWrapper} from "../../components/media/ImageWrapper";

export const metaEegHackathon = {
    title: "Hackathon “AI in Health Sciences”",
    tags: ["hackathon", "ai", "sail"],
    spoiler: "Code, connect, and crack the brainwave code",
    slug: "eeg-hackathon",
    date: new Date("2025-11-11"),
    image: "https://www.krankenhaus-it.de/uploads/images/img692588c03c04f.jpg",
    cc: "© T. Doerk / HSBI"
}

export default function SailEegHackathon() {
    return (<div className={styles.Welcome}>
        <ImageWrapper
            src={"https://live.staticflickr.com/65535/54974685714_3298c044b2_c.jpg"}
        />
        <ImageWrapper
            src={"https://live.staticflickr.com/65535/54974685624_f476e023e8_c.jpg"}
        />
    </div>)
}
// https://www.hsbi.de/presse/pressemitteilungen/hackathon-ai-in-health-sciences-kann-ein-ki-algorithmus-bewegungen-auf-basis-von-gehirnstroemen-erkennen
// https://www.hsbi.de/media/hochschulverwaltung/hsk/bilder-berichterstattung/fachbereiche/fb-3/forschung/2025-11-09-sail-hackathon/20251109_hackathon-sail_doerk_slider-pano.jpg?height=278&width=840
// https://www.krankenhaus-it.de/item.4686/hackathon-an-der-hsbi-ki-modelle-erkennen-bewegungen-aus-eeg-daten.html
// https://nachrichten.idw-online.de/2025/11/24/hackathon-kann-ein-ki-algorithmus-bewegungen-auf-basis-von-gehirnstroemen-erkennen