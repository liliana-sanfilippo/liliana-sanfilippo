import React, {useEffect, useState} from "react";
import postsWithNav from "../../routes/posts";
import ArticleCard from "../ArticleCard";
import Carousel from "react-bootstrap/Carousel";

export default function TagCarousel({tag}: { tag: string }) {
    const [filteredPosts, setFilteredPosts] = useState<any[]>([])

    useEffect(() => {
        if (!tag) return

        const lowerTag = tag.toLowerCase()
        const filtered = postsWithNav.filter(post => post.tags?.some((t: string) => t.toLowerCase() === lowerTag))
        setFilteredPosts(filtered)
    }, [tag])

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
    }


    return (<div>
        {/* <h2>{capitalize(tag)} posts</h2>*/}
        <Carousel data-bs-theme="" className={"max-w-[50vw] mx-auto"}>
            {filteredPosts.map((route, i) => (<Carousel.Item key={i}>
                <ul>
                    <li key={route.slug}>
                        <ArticleCard post={route}/>
                    </li>
                </ul>
            </Carousel.Item>))}
        </Carousel>
    </div>)
}

