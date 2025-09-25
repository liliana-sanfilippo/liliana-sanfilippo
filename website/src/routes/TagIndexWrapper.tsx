import TagIndexPage from "../components/TagIndexPage"
import postsWithNav from "./posts";

export default function TagIndexPageWrapper({ blogRoot }: { blogRoot: string }) {

            const tagMap: Record<string, number> = {}
    postsWithNav.forEach(post => {
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




    return <TagIndexPage tags={tagsArray} />
}
