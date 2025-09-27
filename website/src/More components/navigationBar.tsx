import {Folder, PageRef} from "./Pages";
import {AboutPage} from "../routes/about/AboutPage";
import {BlogPage} from "../routes/about/BlogPage";
import {Precyse} from "../routes/pages/precyse";
import {Aidare} from "../routes/pages/aidare";
import {React} from "../routes/pages/react";
import {Bfh} from "../routes/pages/bfh";
import {CounsellingChatbot} from "../routes/pages/CounsellingChatbot";
import {IgemBielefeld} from "../routes/pages/igemBielefeld";

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
            name: "AIDARE",
            title: "AIDARE",
            path: "/aidare",
            component: <Aidare/>

        },
        {
            name: "BFH European MeetUp",
            title: "BFH European MeetUp",
            path: "/bfh",
            component: <Bfh/>

        },
        {
            name: "Counselling Chatbot",
            title: "Counselling Chatbot",
            path: "/counselling-chatbot",
            component: <CounsellingChatbot  />

        },
        {
            name: "iGEM Bielefeld",
            title: "iGEM Bielefel",
            path: "/igem-bielefeld",
            component: <IgemBielefeld/>

        },
        {
            name: "PreCyse",
            title: "PreCyse",
            path: "/precyse",
            component: <Precyse/>

         },
        {
            name: "React Reference Manager",
            title: "React Reference Manager",
            path: "/react-reference-manager",
            component: <React/>

        },

    ]
    }

    ]