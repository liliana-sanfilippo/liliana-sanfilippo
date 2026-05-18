import React from 'react'
import siteMetadata from '../../siteMetadata'
import {Link} from 'react-router-dom'
import {Post} from "../../posts/post_interface";


interface BlogIndexPageProps {
    postRoutes: Post[]
}


function BlogIndexPage() {
    return (<div>
        <header>
            <h1 className={"blogindex-title"}>
                <Link to={import.meta.env.VITE_BLOG_ROOT}>{siteMetadata.title}</Link>
            </h1>
        </header>
    </div>)
}

export default BlogIndexPage
