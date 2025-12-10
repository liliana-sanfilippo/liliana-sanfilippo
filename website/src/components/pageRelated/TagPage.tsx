import React from 'react'
import ArticleSummary from '../ArticleSummary'
import {Post} from "../../routes/posts/post_interface";


interface TagPageProps {
    name: string
    routes: Post[]
}

function TagPage({name, routes}: TagPageProps) {
    return (<div>
            <h1>{name} posts</h1>
            <ul>
                {routes.map(route => (<li key={route.slug}>
                        <ArticleSummary blogRoot={"/"} post={route}/>
                    </li>))}
            </ul>
        </div>)
}

export default TagPage
