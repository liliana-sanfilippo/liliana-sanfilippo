import {posts} from "./2019-01-05-welcome/post";


const sorted = [...posts].sort((a, b) => b.date.getTime() - a.date.getTime())
const postsWithNav = sorted.map((post, i) => ({
    ...post,
    previousDetails: sorted[i - 1] && {
        title: sorted[i - 1].title,
        path: `/posts/${sorted[i - 1].slug}`
    },
    nextDetails: sorted[i + 1] && {
        title: sorted[i + 1].title,
        path: `/posts/${sorted[i + 1].slug}`
    }
}))

export default postsWithNav


