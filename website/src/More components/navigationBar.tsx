import {Folder, PageRef} from "./Pages";
import {AboutPage} from "../routes/about/AboutPage";
import {BlogPage} from "../routes/about/BlogPage";
import {Precyse} from "../routes/pages/precyse";
import {Aidare} from "../routes/pages/aidare";
import {React} from "../routes/pages/react";

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

    },
    {
        name: "Projects",
    folder: [
    {
        name: "PreCyse",
        title: "PreCyse",
        path: "/precyse",
        component: <Precyse/>

    },
        {
            name: "AIDARE",
            title: "AIDARE",
            path: "/aidare",
            component: <Aidare/>

        },
        {
            name: "iGEM Wikis",
            title: "iGEM Wikis",
            path: "/igem-wikis",
            component: <React/>

        },
    ]
    }

    ]