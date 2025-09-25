import TagIndexPage from "../components/TagIndexPage"
import {loadPosts} from "./posts";
import {useEffect, useState} from "react";
import {Post} from "./posts/post_interface";

export default function TagIndexPageWrapper({ blogRoot }: { blogRoot: string }) {
    const [tags, setTags] = useState<{ name: string; href: string; count: number }[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadPosts().then((posts: Post[]) => {
            const tagMap: Record<string, number> = {}
            posts.forEach(post => {
                post.tags?.forEach(tag => {
                    const key = tag.toLowerCase()
                    tagMap[key] = (tagMap[key] || 0) + 1
                })
            })

            const tagsArray = Object.keys(tagMap).map(tag => ({
                name: tag,
                href: `/tags/${tag}`,
                count: tagMap[tag],
            }))

            setTags(tagsArray)
            setLoading(false)
        })
    }, [])


    if (loading) return <div>Loading tags...</div>

    return <TagIndexPage tags={tags} />
}
