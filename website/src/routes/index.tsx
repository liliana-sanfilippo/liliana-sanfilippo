import React, { Suspense, useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate, useParams} from 'react-router-dom'
import BlogLayout from '../components/BlogLayout'
import BlogIndexPage from '../components/BlogIndexPage'
import BlogPostLayout from '../components/BlogPostLayout'
import siteMetadata from '../siteMetadata'
import { chunk } from 'lodash'
import NotFoundPage from "../components/NotFoundPage";
import {AboutPage} from "./about/AboutPage";
import TagIndexPageWrapper from "./TagIndexWrapper";
import postsWithNav from "./posts";
import TagPageWrapper from "./tags";




function BlogPostWrapper({ blogRoot }: { blogRoot: string }) {
    const { slug } = useParams<{ slug: string }>()
    const post = postsWithNav.find(p => p.slug === slug)
    if (!post) return <div>Post not found</div>
    return <BlogPostLayout blogRoot={blogRoot} post={post} />
}

function AppRouter() {
    console.log("Load site")

    let chunks = chunk(postsWithNav, siteMetadata.indexPageSize)



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
                        <Route path="/posts/:slug" element={<BlogPostWrapper blogRoot="/" />} />

                        {/* Misc Pages */}
                        {/* <Route path="/tags" element={<TagsPage />} />*/}
                        <Route path="/home" element={<AboutPage />} />

                        {/* Tag Index Page */}
                        <Route path="/tags" element={<TagIndexPageWrapper blogRoot="/" />} />


                        {/* Tag Pages */}
                        <Route path="/tags/:tag" element={<TagPageWrapper blogRoot="/" />} />


                    </Route>
                    {/* Fallback 404 */}
                    <Route path="*" element={<NotFoundPage />} />

                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}


export default AppRouter
