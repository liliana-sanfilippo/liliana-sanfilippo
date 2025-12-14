import React from "react";
import ArticleCard from "../../components/ArticleCard";
import posts from "../posts";
import {Post} from "../posts/post_interface";
import {H2} from "../../components/H2"
import PostByTags from "../../components/PostByTags";

// TODO einstellen, dass auf jeder Projektseit die dazugehörige Posts angezeigt werden 
export function BlogPage() {
    const postOne = posts[0];
    let otherPosts: Post[];
    if (posts.length > 1) {
        otherPosts = posts.slice(1)
    } else {
        otherPosts = posts
    }
    return (<div className={"mx-auto gap-8 lg:gap-16"}>
            <H2>By category</H2>
            <div className={"row gap-8 lg:gap-16 w-75 mx-auto"}>
                <PostByTags tag={"iGEM"}/>
                <PostByTags tag={"AI"}/>
                <PostByTags tag={"BFH"}/>
                <PostByTags tag={"React"}/>
            </div>
            <H2>All posts</H2>
                <div className="h-100 m-5 p-5">
                    <div className="col-8 mx-auto" key={postOne.slug}>
                        <ArticleCard post={postOne}/>
                    </div>
                </div>
                <div className={'row gap-8 lg:gap-16 w-75 mx-auto'}>
                    {otherPosts.map( (route: Post) => (
                        <div className={"col"}>
                            <ArticleCard post={route} key={route.slug}/>
                        </div>
                    ))}
                </div>
        </div>
    )
}