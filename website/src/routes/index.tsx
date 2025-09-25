import React, { Suspense, useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate, useParams} from 'react-router-dom'
import BlogLayout from '../components/BlogLayout'
import BlogIndexPage from '../components/BlogIndexPage'
import BlogPostLayout from '../components/BlogPostLayout'
import siteMetadata from '../siteMetadata'
import { chunk } from 'lodash'
import NotFoundPage from "../components/NotFoundPage";
import {AboutPage} from "./about/AboutPage";
import {loadPosts} from "./posts";
import {Post} from "./posts/post_interface";
import TagIndexPageWrapper from "./TagIndexWrapper";


function BlogPostWrapper({ posts, blogRoot }: { posts: Post[], blogRoot: string }) {
    const { slug } = useParams<{ slug: string }>()
    const post = posts.find((p) => p.slug === slug)

    if (!post) return <div>Post not found</div>

    return <BlogPostLayout blogRoot={blogRoot} post={post} />
}


function AppRouter() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadPosts().then((loaded) => {
            setPosts(loaded)
            setLoading(false)
        })
    }, [])

    if (loading) return <div>Loading...</div>


    let chunks = chunk(posts, siteMetadata.indexPageSize)



    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    {/* Blog Layout Wrapper */}
                    <Route element={<BlogLayout blogRoot="/" isViewingIndex={false} />}>

                        <Route path="/" element={<Navigate to="/home" replace />} />

                        {/* Index Pages */}
                        {chunks.map((chunkPosts: any[], i:number) => (
                            i === 0 ? (
                                <Route
                                    key={i}
                                    index
                                    element={
                                        <BlogIndexPage
                                            blogRoot="/"
                                            pageNumber={1}
                                            pageCount={chunks.length}
                                            postRoutes={chunkPosts}
                                        />
                                    }
                                />
                            ) : (
                                <Route
                                    key={i}
                                    path={`page/${i + 1}`}
                                    element={
                                        <BlogIndexPage
                                            blogRoot="/"
                                            pageNumber={i + 1}
                                            pageCount={chunks.length}
                                            postRoutes={chunkPosts}
                                        />
                                    }
                                />
                            )
                        ))}


                        {/* Posts */}
                        <Route path="/posts/:slug" element={<BlogPostWrapper blogRoot="/" posts={posts} />} />

                        {/* Misc Pages */}
                        {/* <Route path="/tags" element={<TagsPage />} />*/}
                        <Route path="/home" element={<AboutPage />} />

                        {/* Tag Index Page */}
                        <Route path="/tags" element={<TagIndexPageWrapper blogRoot="/" />} />

                    </Route>
                    {/* Fallback 404 */}
                    <Route path="*" element={<NotFoundPage />} />

                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}


export default AppRouter
