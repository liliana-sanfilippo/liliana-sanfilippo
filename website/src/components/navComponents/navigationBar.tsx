import {Folder, PageRef} from "../Pages";
import {AboutPage} from "../../routes/about/AboutPage";
import {BlogPage} from "../../routes/about/BlogPage";
import {Aidare} from "../../routes/pages/aidare";
import {React} from "../../routes/pages/react";
import {Bfh} from "../../routes/pages/bfh";
import {CounsellingChatbot} from "../../routes/pages/CounsellingChatbot";
import {IgemBielefeld} from "../../routes/pages/igemBielefeld";
import {Cv} from "../../routes/pages/cv";
import {BibtexTSParser} from "../../routes/pages/BibtexTSParser";
import {AuthorNameParser} from "../../routes/pages/AuthorNameParser";

export const NavigationBar: (PageRef | Folder)[] = [{
    name: "About", title: "About", path: "/about", component: <AboutPage/>

}, {
    name: "CV", title: "CV", path: "/cv", component: <Cv/>

}, {
    name: "Posts", title: "Posts", path: "/posts", component: <BlogPage/>

}, {
    name: "Current Projects", folder: [{
        name: "AIDARE", title: "AIDARE", path: "/aidare", component: <Aidare/>

    }, {
        name: "BFH European MeetUp", title: "BFH European MeetUp", path: "/bfh", component: <Bfh/>

    }, {
        name: "Intelligent Counselling System",
        title: "Intelligent Counselling System",
        path: "/intelligent-counselling-system",
        component: <CounsellingChatbot/>

    }, {
        name: "iGEM Bielefeld", title: "iGEM Bielefeld", path: "/igem-bielefeld", component: <IgemBielefeld/>

    }, /**{
     name: "PreCyse",
     title: "PreCyse",
     path: "/precyse",
     component: <Precyse/>

     },**/
        {
            name: "React Packages", folder: [
                {
                    name: "React Reference Manager",
                    title: "React Reference Manager",
                    path: "/react-reference-manager",
                    component: <React/>

                },
            ]
        },
        {
            name: "Webpack Parser", folder: [
                {
                    name: "Author Name Parser",
                    title: "Author Name Parser",
                    path: "/author-name-parser",
                    component: <AuthorNameParser/>

                },
                {
                    name: "BibTeX TS Parser",
                    title: "BibTeX TS Parser",
                    path: "/bibtex-ts-parser",
                    component: <BibtexTSParser/>

                },
            ]
        }

    ]
},

]