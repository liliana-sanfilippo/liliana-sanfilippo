import React from 'react'
import styles from './document.module.css'

export const meta = {
    title: "Congratulations on Your New Blog!",
    tags: ["react", "navi"],
    spoiler: "Learn how to add new posts and tweak the theme to your liking.",
    slug: "document",
    date: new Date("2025-09-25")
}

export default function DocumentPost() {
    return (
        <div className={styles.Welcome}>

            <h2>How to...</h2>

            <p>
                <strong>To update this post,</strong> edit <code>document.mdx</code> and save to reload.
            </p>

            <p>
                <strong>To update the site's title,</strong> edit <code>siteMetadata.ts</code>.
            </p>
        </div>
    )
}
