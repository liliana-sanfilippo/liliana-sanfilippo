import ArticleCard from "./ArticleCard";
import React from "react";
import postsWithNav from "../routes/posts";
import {Link} from "react-router-dom";



function PostByTags({tag}: { tag: string }) {
    const lowerTag = tag.toLowerCase()
    const filtered = postsWithNav.filter(post => post.tags?.some((t: string) => t.toLowerCase() === lowerTag))
    const latestPost = filtered[0];
    if (latestPost == null) {
        return (
            <>
            </>
        )
    } else {
        return (
            <div className={"col mb-5"}>
                <h4><Link to={"/tags/"+lowerTag}>{tag}</Link></h4>
                <ArticleCard post={latestPost}/>
            </div>
        )
    }
}


export default PostByTags