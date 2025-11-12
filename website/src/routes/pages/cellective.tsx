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
    return(
        <div className={"flex flex-col gap-8 lg:gap-16"}>
            <h1>
                Cellective <i class="bi bi-typescript"></i>
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
const presse: FLink[] = []
const linkedinposts: string[] =[]
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

const peopletabs : TabData[] = [
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