import React from 'react'
import styles from '../document.module.css'
import UniBlog from "../../components/getExternal/getUniBlog";

export const metauniBlogCellective2 = {
    title: "External Blog: Students conduct cancer research with professors as coaches",
    tags: ["igem", "cellective", "external"],
    spoiler: "Interview with the iGEM Team Bielefeld-CeBiTec 2025 “Cellective” about their participation in the iGEM competition.",
    slug: "uni-blog-cellective-2",
    date: new Date("2025-10-16"),
    cc: "Max Noltelocke",
    image: "https://aktuell.uni-bielefeld.de/wp-content/uploads/2025/10/2025-10-14_Rieks_Bunte_Labor-3-1024x683.jpg"
}

export default function uniBlogCellective2() {


    return (<div className={styles.Welcome}>
        <UniBlog
            url="https://aktuell.uni-bielefeld.de/2025/10/20/studierende-entwickeln-therapieansatz-gegen-brustkrebs/"></UniBlog>

    </div>)
}
