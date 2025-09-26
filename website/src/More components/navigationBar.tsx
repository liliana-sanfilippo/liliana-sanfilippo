import {Folder, PageRef} from "./Pages";
import {AboutPage} from "../routes/about/AboutPage";
import {BlogPage} from "../routes/about/BlogPage";

export const NavigationBar: (PageRef | Folder)[] = [
    {
        name: "About",
        title: "About",
        path: "/about",
        component: <AboutPage/>

    },
    {
        name: "Posts",
        title: "Posts",
        path: "/posts",
        component: <BlogPage/>

    }

    ]