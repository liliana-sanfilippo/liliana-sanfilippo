import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TagPage from "../components/TagPage"
import postsWithNav from "./posts";


export default function TagPageWrapper({ blogRoot }: { blogRoot: string }) {
    const { tag } = useParams<{ tag: string }>()
    const [filteredPosts, setFilteredPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

            const lowerTag = tag?.toLowerCase()
            const filtered = postsWithNav.filter(post =>
                post.tags?.some(t => t.toLowerCase() === lowerTag)
            )
            setFilteredPosts(filtered)
            setLoading(false)


    return <TagPage blogRoot={blogRoot} name={tag!} routes={filteredPosts} />
}
