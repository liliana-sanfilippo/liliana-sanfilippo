import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {MDXProvider} from '@mdx-js/react'
import ArticleMeta from '../ArticleMeta'
import {Post} from "../../routes/posts/post_interface";


export interface BlogPostLayoutProps {
    blogRoot: string
    post: Post
}

function BlogPostLayout({post}: BlogPostLayoutProps) {
    const location = useLocation();

    if (!post) {
        return <div>Post not found</div> // oder deine NotFoundPage
    }
    const MDXComponent = post.MDXComponent
    return (<div>
        <article>
            <header>
                <h1>
                    <Link to={location.pathname}>{post.title}</Link>
                </h1>
                <ArticleMeta
                    blogRoot={"/"}
                    data={post}
                />
            </header>
            {}

            <div className="row">
                <div className="col-12">
                    <MDXProvider
                        components={{
                            a: (props: any) => <Link to={props.href}>{props.children}</Link>,
                        }}
                    >
                        <MDXComponent/>
                    </MDXProvider>
                </div>
            </div>

            <footer>
                <section>
                    {post.previousDetails && (<Link
                        to={post.previousDetails.path}>
                        ← {post.previousDetails.title}
                    </Link>)}
                    {post.nextDetails && (<Link to={post.nextDetails.path}>
                        {post.nextDetails.title} →
                    </Link>)}
                </section>
            </footer>
        </article>
    </div>)
}

export default BlogPostLayout
