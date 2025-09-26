
import DocumentPost, {meta as meeta} from "./document";
import {Post} from "./post_interface";
import uniBlogPrecyse1, { metauniBlogPrecyse1} from "./uni-blog-precyse-1";
import uniBlogPrecyse2, {metauniBlogPrecyse2} from "./uni-blog-precyse-2";
import zifBlogAidare, {metazifBlogAidare} from "./zif-blog-aidare";

export const posts: Post[] = [
    {
        ...meeta,
        MDXComponent: DocumentPost,
    },
    {
        ...metauniBlogPrecyse1,
        MDXComponent: uniBlogPrecyse1,
    },
    {
        ...metauniBlogPrecyse2,
        MDXComponent: uniBlogPrecyse2,
    },
    {
        ...metazifBlogAidare,
        MDXComponent: zifBlogAidare,
    },

]