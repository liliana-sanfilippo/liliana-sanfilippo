import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TagPage from "../components/TagPage"
import { loadPosts } from "./posts"

export default function TagPageWrapper({ blogRoot }: { blogRoot: string }) {
    const { tag } = useParams<{ tag: string }>()
    const [filteredPosts, setFilteredPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPosts() {
            const posts = await loadPosts()
            const lowerTag = tag?.toLowerCase()
            const filtered = posts.filter(post =>
                post.tags?.some(t => t.toLowerCase() === lowerTag)
            )
            setFilteredPosts(filtered)
            setLoading(false)
        }
        fetchPosts()
    }, [tag])

    if (loading) return <div>Loading posts...</div>
    return <TagPage blogRoot={blogRoot} name={tag!} routes={filteredPosts} />
}
