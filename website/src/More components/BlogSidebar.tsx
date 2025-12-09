import React from "react";
import ArticleSummary from "../components/ArticleSummary";
import posts from "../routes/posts";

export function BlogSidebar() {
    return (
        <>
            <ul className={"articlesList"}>
                {posts.map(route => (
                    <li key={route.slug}>
                        <ArticleSummary blogRoot={"/"} post={route} noimg />
                    </li>
                ))}
            </ul>
        </>
    )
}
