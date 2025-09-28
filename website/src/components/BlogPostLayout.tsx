import React, {ReactNode} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import ArticleMeta from './ArticleMeta'
import styles from './BlogPostLayout.module.css'
import {Post} from "../routes/posts/post_interface";



export interface BlogPostLayoutProps {
    blogRoot: string
    post: Post
}

function BlogPostLayout({ blogRoot, post  }: BlogPostLayoutProps) {
    const location = useLocation();

    if (!post) {
        return <div>Post not found</div> // oder deine NotFoundPage
    }
    const MDXComponent = post.MDXComponent
  return (
    <>
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
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
                  wrapper: ({ children }: { children: ReactNode }) => (
                      <div className={styles.content}>{children}</div>
                  ),
              }}
          >
              <MDXComponent />
          </MDXProvider>
              </div>

              {/*
               <div className="col-3">
              <BlogSidebar></BlogSidebar>
          </div>
              */}
          </div>

        <footer className={styles.footer}>
          <section className={styles.links}>
            {post.previousDetails && (
              <Link
                className={styles.previous}
                to={post.previousDetails.path}>
                ← {post.previousDetails.title}
              </Link>
            )}
            {post.nextDetails && (
              <Link className={styles.next} to={post.nextDetails.path}>
                {post.nextDetails.title} →
              </Link>
            )}
          </section>
        </footer>
      </article>
    </>
  )
}

export default BlogPostLayout
