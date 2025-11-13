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
import {cellectivepresse} from "../../data/cellectivepresse";
import PosterCarousel from "../../More components/PosterCarousel";
import {igemfiles25} from "../../data/igemfiles25";
import TagCarousel from "../../More components/TagCarousel";
import {precysePresse} from "../../data/precysePresse";
import {LinkLine} from "../../More components/LinkLine";

export function Cellective() {
    return (
        <div className={"flex flex-col gap-8 lg:gap-16"}>
            <h1>
                Cellective
            </h1>
            <TBox video={"https://video.igem.org/videos/embed/jqk8dmnmEmHsHrbErzhycd"}>
                <p>
                    We present Cellective: a riboswitch-based therapeutic platform that selectively targets cancer cells by detecting specific microRNAs and mRNAs, subsequently translating a cellular kill system.
                </p>
                <p> <a href="https://2025.igem.wiki/bielefeld-cebitec/">https://2025.igem.wiki/bielefeld-cebitec/</a></p>
                {/**
                 <iframe title="Programmable circRNA Switches for Cell‑Type‑Specific Gasdermin‑Based Cancer Therapy" width="560" height="315" src="https://video.igem.org/videos/embed/v49GcrdbQG6irwd19Q8545" style="border: 0px;" allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                 **/}
            </TBox>
            <H2>
                Project
            </H2>
            <TabbedBox tabs={cellectiveProjectTabs} defaultActiveKey="design"/>

            <H2>
                People
            </H2>
            <TabbedBox tabs={peopletabs} defaultActiveKey="design"/>
            <H2>
                Wiki
            </H2>
            <H2>
                Press
            </H2>
            <div className={"row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2"}>
                {cellectivepresse.map(link => (
                    <LinkLine url={link.img ?? ""} text={link.linktitle ?? ""} href={link.url}/>
                ))}
            </div>
            <H2> Files </H2>
            <PosterCarousel posters={igemfiles25}/>
            <H2> Social Media </H2>
            <LinkedInCarousel urls={linkedinposts}/>
            <InstagramCarousel urls={instaurls}/>
            <H2>Posts</H2>
            <TagCarousel tag={"cellective"}/>
        </div>
    )
}

const linkedinposts: string[] = []
const instaurls: string[] = []

const cellectiveProjectTabs: TabData[] = [
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