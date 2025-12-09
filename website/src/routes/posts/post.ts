
import DocumentPost, {meta as meeta} from "./document";
import {Post} from "./post_interface";
import uniBlogPrecyse1, { metauniBlogPrecyse1} from "./uni-blog-precyse-1";
import uniBlogPrecyse2, {metauniBlogPrecyse2} from "./uni-blog-precyse-2";
import zifBlogAidare, {metazifBlogAidare} from "./zif-post-aidare1";
import zifBlogAidare2, {metazifBlogAidare2} from "./zif-post-aidare2";
import wiardaBlogAidare, {metawiardaBlogAidare} from "./wiarda-blog-aidare";
import zifModelsOfChange, {metazifModelsOfChange} from "./zif-models-of-change";
import jamboree2024, {metajamboree2024} from "./jamboree2024";
import jamboree2025, {metajamboree2025} from "./jamboree2025";
import bfh2024, {metabfh2024} from "./bfh2024";
import bfh2025, {metabfh2025} from "./bfh2025";
import muensterMeetup2024, {metamuensterMeetup2024} from "./muenster-meetup-2024";
import muensterMeetup2025, {metamuensterMeetup2025} from "./muenster-meetup-2025";
import CitationManagerFirstsTests, {metaCitationManagerFirstsTests} from "./citation-manager-firsts-tests";
import Cellective, {metaCellective} from "./cellective";
import Lexartes, {metaLexartes} from "./lexartes";
import AidareWebsiteLaunch, {metaAidareWebsiteLaunch} from "./aidare-website-launch";
import MeetupEindhoven2025, {metaMeetupEindhoven2025} from "./meetup-eindhoven-2025";
import PrecysePaper, {metaPrecysePaper} from "./precyse.paper";
import Biteach2024, {metaBiteach2024} from "./biteach-2024";
import RoxenTraining, {metaRoxenTraining} from "./roxen-training";
import WikiGuide1, {metaWikiGuide1} from "./wiki-guide-1";
import SailSpringSchool, {metaSailSpringSchool} from "./sail-spring-school";
import JamboreePrep2024, {metaJamboreePrep2024} from "./jamboree-prep-2024";
import EegHackathon, {metaEegHackathon} from "./eeg-hackathon";
import IgemHomecoming24, {metaIgemHomecoming24} from "./igem-homecoming-24";
import IgemHomecoming25, {metaIgemHomecoming25} from "./igem-homecoming-25";

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
        ...metajamboree2025,
        MDXComponent: jamboree2025,
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
    {
        ...metaAidareWebsiteLaunch,
        MDXComponent: AidareWebsiteLaunch
    },
    {
        ...metaMeetupEindhoven2025,
        MDXComponent: MeetupEindhoven2025
    },
    {
        ...metaPrecysePaper,
        MDXComponent: PrecysePaper
    },
    {
        ...metaBiteach2024,
        MDXComponent: Biteach2024
    },
   /* {
        ...metaRoxenTraining,
        MDXComponent: RoxenTraining
    },*/
    {
        ...metaWikiGuide1 ,
        MDXComponent: WikiGuide1
    },
    {
        ...metaSailSpringSchool ,
        MDXComponent: SailSpringSchool
    },
    {
        ...metaJamboreePrep2024 ,
        MDXComponent: JamboreePrep2024
    },
    {
        ...metaEegHackathon,
        MDXComponent: EegHackathon
    },
    {
        ...metaIgemHomecoming24,
        MDXComponent: IgemHomecoming24
    },
    {
        ...metaIgemHomecoming25,
        MDXComponent: IgemHomecoming25
    }

]