import React from 'react'
import styles from './document.module.css'

export const metamuensterMeetup2024 = {
    title: "MeetUp: Münster 2024",
    tags: ["igem", "meetup"],
    spoiler: "Team Münster invited to an exciting weekend full of scientific lectures on synthetic biology and" +
        " entrepreneurship, project presentations, and plenty of networking opportunities.",
    slug: "muenster-2024",
    date: new Date("2024-09"),
    cc: "iGEM team Bielefeld-CeBiTec 2024",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQG-CunGJwyWRw/feedshare-shrink_800/feedshare-shrink_800/0/1724261410172?e=1761782400&v=beta&t=04ofbCb_9_aMNKiSpg5gO-dwWuWGZ0ph98hhqrP29Zo"
}

export default function muensterMeetup2024() {
    return (
        <div className={styles.Welcome}>
            <p>We were able to present our project PreCyse at the Münster JuniorJam and met a lot of people from BFH again!</p>
            <p>During the poster exhibition, teams exchanged ideas and discussed their projects. My favourite talk was the ony by David Baker, he presented about his research in the field of protein structure prediction and the design of new proteins.</p>
            <div className="row align-items-center">
                <div className="col-5 mx-auto">
                    <img src="https://media.licdn.com/dms/image/v2/D4E22AQHZixIM3D7WeQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1724261414041?e=1761782400&v=beta&t=YL4swJa-X_SUnVL5UoO16QUXyifxIJ00muxDR_Csmeo"/>
                </div>
                <div className="col-5 mx-auto">
                    <img src="https://media.licdn.com/dms/image/v2/D4E22AQG-CunGJwyWRw/feedshare-shrink_800/feedshare-shrink_800/0/1724261410172?e=1761782400&v=beta&t=04ofbCb_9_aMNKiSpg5gO-dwWuWGZ0ph98hhqrP29Zo"/>
                </div>
            </div>
        </div>
    )
}
