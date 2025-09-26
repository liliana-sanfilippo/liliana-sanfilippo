import {NavigationBar} from "../More components/navigationBar";
import {Page} from "../More components/Pages";


export const getPathMapping = () => {
    return NavigationBar.reduce<{
        [key: string]: Page;
    }>((map, item) => {
        if ("path" in item && item.path && item.component) {
            console.log("Path: " + item.path )
            map[item.path] = {
                name: item.name,
                title: item.title,
                path: item.path,
                component: item.component,
                header: item.header,
            };

        } else if ("folder" in item && item.folder) {
            item.folder.forEach((page) => {
                if (page.path && page.component) {
                    map[page.path] = {
                        name: page.name,
                        title: page.title,
                        path: page.path,
                        component: page.component,
                        header: page.header!,
                    };
                }
            });
        }
        return map;
    }, {});
};
