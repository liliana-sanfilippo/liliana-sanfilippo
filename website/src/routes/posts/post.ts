
import DocumentPost, {meta as meeta} from "./document";
import {Post} from "./post_interface";
import uniBlogPrecyse1, { metauniBlogPrecyse1} from "./uni-blog-precyse-1";
import uniBlogPrecyse2, {metauniBlogPrecyse2} from "./uni-blog-precyse-2";
import zifBlogAidare, {metazifBlogAidare} from "./zif-post-aidare1";
import zifBlogAidare2, {metazifBlogAidare2} from "./zif-post-aidare2";
import wiardaBlogAidare, {metawiardaBlogAidare} from "./wiarda-blog-aidare";
import zifModelsOfChange, {metazifModelsOfChange} from "./zif-models-of-change";
import jamboree2024, {metajamboree2024} from "./jamboree2024";
import bfh2024, {metabfh2024} from "./bfh2024";
import bfh2025, {metabfh2025} from "./bfh2025";
import muensterMeetup2024, {metamuensterMeetup2024} from "./muenster-meetup-2024";
import muensterMeetup2025, {metamuensterMeetup2025} from "./muenster-meetup-2025";
import CitationManagerFirstsTests, {metaCitationManagerFirstsTests} from "./citation-manager-firsts-tests";
import Cellective, {metaCellective} from "./cellective";
import Lexartes, {metaLexartes} from "./lexartes";

export const posts: Post[] = [
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
    {
        ...metawiardaBlogAidare,
        MDXComponent: wiardaBlogAidare,
    },
    {
        ...metazifModelsOfChange,
        MDXComponent: zifModelsOfChange
    },
    {
        ...metazifBlogAidare2,
        MDXComponent: zifBlogAidare2,
    },
    {
        ...metajamboree2024,
        MDXComponent: jamboree2024,
    },
    {
        ...metabfh2025,
        MDXComponent: bfh2025
    },
    {
        ...metabfh2024,
        MDXComponent: bfh2024
    },
    {
        ...metamuensterMeetup2024,
        MDXComponent: muensterMeetup2024
    },
    {
        ...metamuensterMeetup2025,
        MDXComponent: muensterMeetup2025
    },
    {
        ...metaCitationManagerFirstsTests,
        MDXComponent: CitationManagerFirstsTests
    },
    {
        ...metaCellective,
        MDXComponent: Cellective
    },
    {
        ...metaLexartes,
        MDXComponent: Lexartes
    },


]