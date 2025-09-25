import React, {ReactNode} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import siteMetadata from '../siteMetadata'
import ArticleMeta from './ArticleMeta'
import Bio from './Bio'
import styles from './BlogPostLayout.module.css'
import {LoadedPost} from "../routes/posts/post_interface";



export interface BlogPostLayoutProps {
    blogRoot: string
    post: LoadedPost
}

function BlogPostLayout({ blogRoot, post  }: BlogPostLayoutProps) {
    const location = useLocation();
  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.

    if (!post) {
        return <div>Post not found</div> // oder deine NotFoundPage
    }
  return (
    <>
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <Link to={location.pathname}>{post.title}</Link>
          </h1>
          <ArticleMeta
            blogRoot={blogRoot}
            data={post}
          />
        </header>
        <MDXProvider
            components={{
                a: (props: any) => <Link to={props.href}>{props.children}</Link>,
                wrapper: ({ children }: { children: ReactNode} ) => <div className={styles.content}>{children}</div>,
          }}>
            {post.MDXComponent}
        </MDXProvider>
        <footer className={styles.footer}>
          <h3 className={styles.title}>
            <Link to={blogRoot}>{siteMetadata.title}</Link>
          </h3>
          <Bio className={styles.bio} />
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
