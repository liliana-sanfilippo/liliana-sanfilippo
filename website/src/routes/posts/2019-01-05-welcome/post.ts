import {Post} from "../post_interface";
import DocumentPost, {meta as meeta} from "./document";

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