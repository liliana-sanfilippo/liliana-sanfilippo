import importAll from "import-all.macro"
import slugify from "slugify"
import { sortBy } from "lodash"
import {Post} from "./post_interface";


const postModules = importAll.deferred("./**/post.ts?(x)")
const importPost = (pathname: string) => postModules[pathname]()
const postPathnames = Object.keys(postModules)


let posts: Post[] = []

export async function loadPosts() {
    const postDetails = await Promise.all(
        postPathnames.map(async (pathname) => {
            const { default: meta } = await importPost(pathname)
            const slug = slugify(meta.title, { lower: true })
            const date = new Date() // oder aus Filename ableiten

            return { ...meta, slug, date }
        })
    )

    // Sortieren
    const sorted = sortBy(postDetails, "date").reverse()

    // previous / next setzen
    posts = sorted.map((post, i) => {
        const previous = sorted[i - 1]
        const next = sorted[i + 1]

        return {
            ...post,
            previousDetails: previous && {
                title: previous.title,
                path: `/posts/${previous.slug}`,
            },
            nextDetails: next && {
                title: next.title,
                path: `/posts/${next.slug}`,
            },
        }
    })

    return posts
}

