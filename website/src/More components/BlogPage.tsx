import React from "react";
import ArticleSummary from "../components/ArticleSummary";
import posts from "../routes/posts";

export function BlogPage() {
    return (
        <>
            <ul className={"articlesList"}>
                {posts.map(route => (
                    <li key={route.slug}>
                        <ArticleSummary blogRoot={"/"} post={route} />
                    </li>
                ))}
            </ul>
        </>
    )
}
