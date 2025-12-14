import React from 'react'
import styles from './document.module.css'

export const metaBiteach2024 = {
    title: "The counselling chatbot presented at BI.teach",
    tags: ["counselling-bot", "ai"],
    spoiler: "Our faculty-specific  counselling chatbot project was presented at the BI.teach days under the title 'AI – Risky development or new opportunities for teaching, learning, and examining? Generative AI and the teaching and learning culture at Bielefeld University'.",
    slug: "biteach-2024",
    date: new Date("2024-11-20"),
    image: "https://www.uni-bielefeld.de/_internal/cimg!0/fp6dwzg3oq8x5jgf4tg45hhmwpzc6q1.jpeg",
    cc: "Liliana Sanfilippo"
}


export default function Biteach2024() {
    return (<div className={styles.Welcome}>

        https://www.uni-bielefeld.de/lehre/biteach/bi.teach-2024/
    </div>)
}
