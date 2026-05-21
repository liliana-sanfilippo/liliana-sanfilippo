import React, {useEffect} from 'react'
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import BlogLayout from '../components/pageRelated/BlogLayout'
import BlogPostLayout from '../components/pageRelated/BlogPostLayout'
import NotFoundPage from "../components/pageRelated/NotFoundPage";
import {AboutPage} from "./about/AboutPage";
import TagIndexPageWrapper from "./TagIndexWrapper";
import postsWithNav from "../posts";
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
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get('p');

        if (redirect) {
            // Setze die echte URL ohne Query-Param
            window.history.replaceState({}, '', redirect);
        }
    }, []);


    const pathMapping = getPathMapping();

    return (<BrowserRouter basename={import.meta.env.VITE_BASE_NAME}>
        <div id={"main-wrapper"}>
            <Routes>


                {/* Blog Layout Wrapper */}
                <Route element={
                    <div className={"flex flex-row"}>
                        {/* <div className={"sidebarbox hidden md:block xl:block md:w-2/12 xl:w-2/12"}>

                            <Sidebar/>

                        </div> */}
                        <div className={"w-full md:w-9/12 xl:w-9/12 mx-auto"}>
                            <BlogLayout/>
                        </div>
                    </div>

                }>


                    {/* Posts */}
                    <Route path="/posts/:slug" element={<BlogPostWrapper/>}/>

                    {/* Misc NavigationBar */}
                    {/* <Route path="/tags" element={<TagsPage />} />*/}
                    <Route path="/home" element={<AboutPage/>}/>
                    <Route path={"/"} element={<AboutPage/>}/>
                    <Route path={""} element={<AboutPage/>}/>

                    {Object.entries(pathMapping).map(([path, {component: Component}]) => (
                            <Route path={path} element={Component}/>
                        )
                    )
                    }


                    <Route path={`${import.meta.env.VITE_REACT_REFERENCE_MANAGER_PATH}/:pageName`}
                           element={<WikiPage folder={"wiki"}/>}/>
                    <Route path={`${import.meta.env.VITE_REACT_REFERENCE_GENERATOR_PATH}/:pageName`}
                           element={<WikiPage folder={"wiki-generator"}/>}/>
                    <Route path={`${import.meta.env.VITE_REACT_BIBTEX_PARSER_PATH}/:pageName`}
                           element={<WikiPage folder={"wiki-parser"}/>}/>
                    <Route path={`${import.meta.env.VITE_REACT_AUTHOR_PARSER_PATH}/:pageName`}
                           element={<WikiPage folder={"wiki-author"}/>}/>
                    <Route path={`${import.meta.env.VITE_IGEM_BIELEFELD_PATH}/:pageName`}
                           element={<WikiPage folder={"igemnotes"}/>}/>
                    <Route path={"/other/:pageName"}
                           element={<WikiPage folder={"other"}/>}/>

                    {/* Tag Index Page */}
                    <Route path={import.meta.env.VITE_TAG_ROOT} element={<TagIndexPageWrapper/>}/>


                    {/* Tag NavigationBar */}
                    <Route path={`${import.meta.env.VITE_TAG_ROOT}/:tag`} element={<TagPageWrapper/>}/>


                </Route>
                {/* Fallback 404 */}
                <Route path="*" element={<NotFoundPage/>}/>

            </Routes>
        </div>

    </BrowserRouter>)
}


export default AppRouter
