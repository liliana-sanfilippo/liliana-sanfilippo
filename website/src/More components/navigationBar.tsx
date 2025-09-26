import {Folder, PageRef} from "./Pages";
import {AboutPage} from "../routes/about/AboutPage";

export const NavigationBar: (PageRef | Folder)[] = [
    {
        name: "About",
        title: "About",
        path: "/about",
        component: <AboutPage/>

    },
    {
        name: "Homepage",
        title: "Homepage",
        path: "/",
        component: <AboutPage/>

    }

    ]