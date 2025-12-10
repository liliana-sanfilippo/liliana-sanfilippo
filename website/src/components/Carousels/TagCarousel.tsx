import React, {useEffect, useState} from "react";
import postsWithNav from "../../routes/posts";
import {ArticleCard} from "../ArticleSummary";
import Carousel from "react-bootstrap/Carousel";

export default function TagCarousel({tag}: { tag: string }) {
    const [filteredPosts, setFilteredPosts] = useState<any[]>([])

    useEffect(() => {
        if (!tag) return

        const lowerTag = tag.toLowerCase()
        const filtered = postsWithNav.filter(post => post.tags?.some((t: string) => t.toLowerCase() === lowerTag))
        setFilteredPosts(filtered)
    }, [tag])


    return (<div>
        <h1>{tag} posts</h1>
        <Carousel data-bs-theme="">
            {filteredPosts.map((route, i) => (<Carousel.Item key={i}>
                <ul>
                    <li key={route.slug}>
                        <ArticleCard blogRoot={"/"} post={route}/>
                    </li>
                </ul>
            </Carousel.Item>))}
        </Carousel>
    </div>)
}

