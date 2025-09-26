
import DocumentPost, {meta as meeta} from "./document";
import {Post} from "./post_interface";

export const posts: Post[] = [
    {
        ...meeta,
        MDXComponent: DocumentPost,
    },
    {
        ...meeta,
        MDXComponent: DocumentPost,
    },

]