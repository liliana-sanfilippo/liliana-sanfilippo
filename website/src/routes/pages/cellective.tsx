import {FLink, FurtherLinks} from "../../More components/FurtherLinks";
import React from "react";
import {InstagramCarousel, LinkedInCarousel} from "../../More components/LinkedInCarousel";
import {InstagramEmbed} from "react-social-media-embed";
import {VideoBox, LargeGBox} from "../../More components/G_Box";
import {TBox} from "../../More components/T_Box";
import {H2, H3} from "../../More components/H2";
import {Video} from "../../More components/Video";
import {Row, Col} from "react-bootstrap";
import TabbedBox, {TabData} from "../../components/TabbedBox";

export function Cellective() {
    return (
        <div className={"flex flex-col gap-8 lg:gap-16"}>
            <h1>
                Cellective
            </h1>
            <H2>
                Project
            </H2>
            <TabbedBox tabs={projectTabs} defaultActiveKey="design"/>

            <H2>
                People
            </H2>
            <TabbedBox tabs={peopletabs} defaultActiveKey="design"/>
            <H2>
                Press
            </H2>
            <FurtherLinks flinks={presse}/>
            <H2> Files </H2>
            <H2> Social Media </H2>
            <LinkedInCarousel urls={linkedinposts}/>
            <InstagramCarousel urls={instaurls}/>
        </div>
    )
}

const presse: FLink[] = [
    {
        text: "Die Glocke",
        url: "https://www.die-glocke.de/regionales/artikel/uni-bielefeld-neuer-therapieansatz-gegen-brustkrebs-1761060854",
        linktitle: "Uni Bielefeld: Neuer Therapieansatz gegen Brustkrebs"
    },
    {
        url: "https://aktuell.uni-bielefeld.de/2025/10/16/studierende-forschen-mit-professoren-als-coaches-zu-krebs/",
        linktitle: "Studierende forschen mit Professoren als Coaches zu Krebs",
        text: "BIS Blog"
    },
    {
        text: "BIS Blog",
        linktitle: "Studierende entwickeln Therapieansatz gegen Brustkrebs",
        url: "https://aktuell.uni-bielefeld.de/2025/10/20/studierende-entwickeln-therapieansatz-gegen-brustkrebs/"
    },
    {
        text: "Tagesschau",
        linktitle: "Bielefelder Studierende forschen an neuer Brustkrebs-Therapie",
        url: "https://www.tagesschau.de/inland/regional/nordrheinwestfalen/wdr-bielefelder-studierende-forschen-an-neuer-brustkrebs-therapie-100.html"
    },
    {
        linktitle: "Neue Therapie gegen aggressiven Brustkrebs aus Bielefeld",
        text: "WDR",
        url: "https://www1.wdr.de/lokalzeit/fernsehen/suedwestfalen/neue-therapie-gegen-aggressiven-brustkrebs-aus-bielefeld-100.html"
    },
    {
        linktitle: "Bielefelder Studierende forschen an neuer Brustkrebs-Therapie",
        text: "WDR",
        url: "https://www1.wdr.de/nachrichten/westfalen-lippe/studierende-bielefeld-brustkrebs-forschung-100.html"
    },
    {
        linktitle: "iGEM 2025: Meet some of the teams driving innovation",
        text: "IDT",
        url: "https://eu.idtdna.com/page/support-and-education/decoded-plus/igem-2025-meet-some-of-the-teams-driving-innovation/"
    }
]
const linkedinposts: string[] = []
const instaurls: string[] = []

const projectTabs: TabData[] = [
    {
        eventKey: "design",
        title: "Background",
        content: (<></>)
    },
    {
        eventKey: "build",
        title: "Engineering",
        content: (<></>)
    },
    {
        eventKey: "test",
        title: "Human Practices",
        content: (<></>)
    },
    {
        eventKey: "learn",
        title: "Results",
        content: (<></>)
    },
    {
        eventKey: "secret",
        title: "Parts",
        content: (<></>)
    }
]

const peopletabs: TabData[] = [
    {
        eventKey: "design",
        title: "Team",
        content: (<>
        </>)
    },
    {
        eventKey: "build",
        title: "Supporters",
        content: (<></>)
    }
]