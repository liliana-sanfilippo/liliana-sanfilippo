import {Folder, PageRef} from "../Pages";
import {AboutPage} from "../../routes/about/AboutPage";
import {BlogPage} from "../../routes/about/BlogPage";
import {Aidare} from "../../routes/pages/aidare";
import {ReactManager} from "../../routes/pages/react-manager";
import {Bfh} from "../../routes/pages/bfh";
import {CounsellingChatbot} from "../../routes/pages/CounsellingChatbot";
import {IgemBielefeld} from "../../routes/pages/igemBielefeld";
import {Cv} from "../../routes/pages/cv";
import {ReactGenerator} from "../../routes/pages/react-generator";
import {BibtexParser} from "../../routes/pages/bibtex-parser";
import {AuthorNameParser} from "../../routes/pages/author-name-parser";

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
            name: "Packages", folder: [
                {
                    name: "React Reference Manager",
                    title: "React Reference Manager",
                    path: "/react-reference-manager",
                    component: <ReactManager/>

                },
                {
                    name: "React Reference Generator",
                    title: "React Reference Generator",
                    path: "/react-bibtex-reference-generator",
                    component: <ReactGenerator/>

                },
                {
                    name: "Typescript BibteX Parser",
                    title: "Typescript BibteX Parser",
                    path: "/bibtex-ts-parser",
                    component: <BibtexParser/>

                },
                {
                    name: "Typescript Name Parser",
                    title: "Typescript Name Parser",
                    path: "/author-name-parser",
                    component: <AuthorNameParser/>

                },
            ]
        }

    ]
},

]