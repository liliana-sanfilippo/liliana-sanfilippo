import React, { Suspense} from 'react'
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
import {getPathMapping} from "../utils/getPathMapping";




function BlogPostWrapper({ blogRoot }: { blogRoot: string }) {
    const { slug } = useParams<{ slug: string }>()
    const post = postsWithNav.find(p => p.slug === slug)
    if (!post) return <div>Post not found</div>
    return <BlogPostLayout blogRoot={blogRoot} post={post} />
}

function AppRouter() {

    let chunks = chunk(postsWithNav, siteMetadata.indexPageSize)
    const pathMapping = getPathMapping();


    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>


                    {/* Blog Layout Wrapper */}
                    <Route element={<BlogLayout  />}>



                        {/* Index NavigationBar */}
                        {chunks.map((chunkPosts: any[], i:number) => (
                            i === 0 ? (
                                <Route
                                    key={i}
                                    index
                                    element={
                                        <BlogIndexPage
                                            blogRoot="/blog"
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
                                            blogRoot="/blog"
                                            postRoutes={chunkPosts}
                                        />
                                    }
                                />
                            )
                        ))}

                        {/* Posts */}
                        <Route path="/posts/:slug" element={<BlogPostWrapper blogRoot="/blog" />} />

                        {/* Misc NavigationBar */}
                        {/* <Route path="/tags" element={<TagsPage />} />*/}
                        <Route path="/home" element={<AboutPage />} />


                        {Object.entries(pathMapping).map(([path, { component: Component }]) => (
                            <Route path={path} element={Component} />
                        ))}

                        {/* Tag Index Page */}
                        <Route path="/tags" element={<TagIndexPageWrapper />} />


                        {/* Tag NavigationBar */}
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
