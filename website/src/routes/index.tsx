import React, {Suspense} from 'react'
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import BlogLayout from '../components/pageRelated/BlogLayout'
import BlogIndexPage from '../components/pageRelated/BlogIndexPage'
import BlogPostLayout from '../components/pageRelated/BlogPostLayout'
import siteMetadata from '../siteMetadata'
import {chunk} from 'lodash'
import NotFoundPage from "../components/pageRelated/NotFoundPage";
import {AboutPage} from "./about/AboutPage";
import TagIndexPageWrapper from "./TagIndexWrapper";
import postsWithNav from "./posts";
import TagPageWrapper from "./tags";
import {getPathMapping} from "../utils/getPathMapping";
import {WikiPage} from "../components/wiki/WikiPage";


function BlogPostWrapper() {
    const {slug} = useParams<{ slug: string }>()
    const post = postsWithNav.find(p => p.slug === slug)
    if (!post) return <div>Post not found</div>
    return <BlogPostLayout post={post}/>
}

function AppRouter() {

    let chunks = chunk(postsWithNav, siteMetadata.indexPageSize)
    const pathMapping = getPathMapping();

    return (<BrowserRouter basename={import.meta.env.VITE_BASE_NAME}>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>


                {/* Blog Layout Wrapper */}
                <Route element={<BlogLayout/>}>


                    {/* Index NavigationBar */}
                    {chunks.map((chunkPosts: any[], i: number) => (i === 0 ? (<Route
                        key={i}
                        index
                        element={<BlogIndexPage/>}
                    />) : (<Route
                        key={i}
                        path={`page/${i + 1}`}
                        element={<BlogIndexPage/>}
                    />)))}

                    {/* Posts */}
                    <Route path="/posts/:slug" element={<BlogPostWrapper/>}/>

                    {/* Misc NavigationBar */}
                    {/* <Route path="/tags" element={<TagsPage />} />*/}
                    <Route path="/home" element={<AboutPage/>}/>

                    {Object.entries(pathMapping).map(([path, {component: Component}]) => (
                        <Route path={path} element={Component}/>))}
                    <Route path={`${import.meta.env.VITE_REACT_REFERENCE_MANAGER_PATH}/:pageName`}  element={<WikiPage folder={"wiki"}/>} />
                    <Route path={`${import.meta.env.VITE_REACT_REFERENCE_GENERATOR_PATH}/:pageName`}  element={<WikiPage folder={"wiki-generator"}/>} />
                    <Route path={`${import.meta.env.VITE_REACT_BIBTEX_PARSER_PATH}/:pageName`}  element={<WikiPage folder={"wiki-parser"}/>} />
                    <Route path={`${import.meta.env.VITE_REACT_AUTHOR_PARSER_PATH}/:pageName`} element={<WikiPage folder={"wiki-author"}/>} />


                    {/* Tag Index Page */}
                    <Route path={import.meta.env.VITE_TAG_ROOT} element={<TagIndexPageWrapper/>}/>


                    {/* Tag NavigationBar */}
                    <Route path={`${import.meta.env.VITE_TAG_ROOT}/:tag`} element={<TagPageWrapper/>}/>


                </Route>
                {/* Fallback 404 */}
                <Route path="*" element={<NotFoundPage/>}/>

            </Routes>
        </Suspense>
    </BrowserRouter>)
}


export default AppRouter
