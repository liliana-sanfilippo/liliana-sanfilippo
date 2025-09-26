import styles from './document.module.css'
import React from "react";
import ArticleSummary from "../../components/ArticleSummary";
import posts from "../posts";

export function BlogPage() {
    return(<div className={styles.Document}>



        <div className="">
            <>
                <div className={'row {styles.articlesList}'}>
                    {posts.map(route => (
                        <div className="col-3" key={route.slug}>
                            <ArticleSummary blogRoot={"/"} post={route} />
                        </div>
                    ))}
                </div>
            </>
        </div>

    </div>)
}