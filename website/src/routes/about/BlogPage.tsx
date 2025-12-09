import styles from './document.module.css'
import React from "react";
import ArticleSummary, {ArticleCard} from "../../components/ArticleSummary";
import posts from "../posts";

// TODO einstellen, dass auf jeder Projektseit die dazugehörige Posts angezeigt werden 
export function BlogPage() {
    return(<div className={styles.Document}>
        <div>
            <>
                <div className="h-100 m-5 p-5">
                    <div className="col-8 mx-auto" key={posts[0].slug}>
                        <ArticleCard spoiler blogRoot={"/"} post={posts[0]} />
                    </div>
                </div>
                <div className={'row'}>
                    {posts.map(route => (
                        <div className="col-4 my-3" key={route.slug}>
                            <ArticleSummary blogRoot={"/"} post={route} />
                        </div>
                    ))}
                </div>
            </>
        </div>

    </div>)
}