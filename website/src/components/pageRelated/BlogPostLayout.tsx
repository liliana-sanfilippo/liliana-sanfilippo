import React from 'react'
import {Link} from 'react-router-dom'
import {MDXProvider} from '@mdx-js/react'
import {Post} from "../../posts/post_interface";
import {formatDate} from "../../utils/formats";


export interface BlogPostLayoutProps {
    post: Post
}

function BlogPostLayout({post}: BlogPostLayoutProps) {

    if (!post) {
        return <div>Post not found</div> // oder deine NotFoundPage
    }
    const MDXComponent = post.MDXComponent
    return (<div>
        <article>
            <header>
                <h1 className={"mb-3"}>
                    {post.title}
                </h1>
                <i className={"text-gray-500"}>{formatDate(post.date)}</i>
            </header>
            {}

            <div className="row my-5">
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
