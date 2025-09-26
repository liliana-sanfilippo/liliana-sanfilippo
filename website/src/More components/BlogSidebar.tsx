import React from "react";
import styles from "../components/BlogIndexPage.module.css";
import ArticleSummary from "../components/ArticleSummary";
import {Post} from "../routes/posts/post_interface";

export function BlogSidebar(  {postRoutes}:{ postRoutes: Post[]}) {
    return (
        <>
            <ul className={styles.articlesList}>
                {postRoutes.map(route => (
                    <li key={route.slug}>
                        <ArticleSummary blogRoot={"/blog"} post={route} />
                    </li>
                ))}
            </ul>
        </>
    )
}
