import React from "react";
import styles from "../components/BlogIndexPage.module.css";
import ArticleSummary from "../components/ArticleSummary";
import posts from "../routes/posts";

export function BlogPage() {
    return (
        <>
            <ul className={styles.articlesList}>
                {posts.map(route => (
                    <li key={route.slug}>
                        <ArticleSummary blogRoot={"/"} post={route} />
                    </li>
                ))}
            </ul>
        </>
    )
}
