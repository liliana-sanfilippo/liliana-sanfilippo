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

export function Precyse() {

    const presse: FLink[] = [
        {
            text: "NW",
            linktitle: "Bielefelder Wissenschaftler im Kampf gegen Mukoviszidose",
            url: "https://www.nw.de/lokal/bielefeld/mitte/23937853_Bielefelder-Wissenschaftler-im-Kampf-gegen-Mukoviszidose.html"
        },
        {
            text: "Hertz",
            linktitle: "Forschungspreis für Bielefelder Studierendenteam",
            url: "https://www.hertz879.de/nachrichten/forschungspreis-fuer-bielefelder-studierendenteam/"
        },
        {
            text: "Westfahlen Blatt",
            linktitle: "Therapieansatz für Mukoviszidose: Vier Preise gehen nach Bielefeld",
            url: "https://www.westfalen-blatt.de/owl/bielefeld/therapieansatz-fuer-mukoviszidose-vier-preise-gehen-nach-bielefeld-3189405"
        },
        {
            text: "Ostwestfahlen",
            linktitle: "Mukoviszidose behandeln: Uni Bielefeld gewinnt vier Preise in Paris",
            url: "https://www.linkedin.com/posts/ostwestfalen_studierende-forschen-an-gentherapie-für-mukoviszidose-activity-7259834308918407169-mwQ8/"
        },
        {
            linktitle: "Bielefelder Studierende revolutionieren Gentherapie gegen Mukoviszidose!",
            text: "Nachrichten Österreich",
            url: "https://die-nachrichten.at/deutschland/nordrhein-westfalen/bielefeld/bielefelder-studierende-revolutionieren-gentherapie-gegen-mukoviszidose/"
        },
        {
            linktitle: "Studierende forschen an Gentherapie für Mukoviszidose",
            url: "https://blogs.uni-bielefeld.de/blog/pressemitteilungen/entry/studierende-forschen-an-gentherapie-f",
            text: "BIS-Blog"
        },
        {
            linktitle: "Vierfach Gold für Bielefelder iGEM-Team",
            url: "https://blogs.uni-bielefeld.de/blog/pressemitteilungen/entry/vierfach-gold-f-uuml-r",
            text: "BIS-Blog"
        }
    ]

    const linkedinposts: string[] = [
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7259238460971003904?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7252608529297981442?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7258151267380662274?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7259600599707537408?collapsed=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7259834308335431680?collapsed=1"
    ]

    const instaurls: string[] = [
        "https://www.instagram.com/p/DCBamUFMuyZ/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/reel/DA-rJmEO4Uq/?utm_source=ig_embed&amp;utm_campaign=loading"
    ]

    return (
        <div className={"flex flex-col gap-8 lg:gap-16"}>
            <h1>
                PreCyse
            </h1>
            <TBox video={"https://video.igem.org/videos/embed/9QWExnNCFSWJWbsRTFEZDd"}>
                    <p>
                        We are proud to present PreCyse, a next-generation Prime Editing technology, as innovative gene therapy approach for Cystic Fibrosis (CF) specifically targeting the most common mutation F508del of the CFTR gene.
                    </p>
                <p> <a href="https://2024.igem.wiki/bielefeld-cebitec/description?scrollTo=Abstract">https://2024.igem.wiki/bielefeld-cebitec/</a></p>
              
            </TBox>
            <H2>
                Project
            </H2>
                <TabbedBox tabs={projectTabs} defaultActiveKey="design"/>

            <H2>
                People
            </H2>
            <TabbedBox tabs={peopletabs} defaultActiveKey="design"/>



            {/**
             <iframe width="560" height="315" src="https://www.youtube.com/embed/pJrpLIjvDV0?si=kFp18yHKlnBxKtZR"
             title="YouTube video player" frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerPolicy="strict-origin-when-cross-origin"
             allowFullScreen></iframe>

             **/}



            {/** <iframe src="https://static.igem.wiki/teams/5247/pdfs/wiki-broschure-v1-2.pdf" width="100%"
                        title="title" className="two-pdf-line small-i"></iframe> **/}

            {/**<p><img src="https://static.igem.wiki/teams/5247/photos/meetup/posters-and-stuff/bfh-poster-bielefeld-1.png"/></p>**/}
            <H2>
                Paper
            </H2>
            
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

// https://video.igem.org/w/9QWExnNCFSWJWbsRTFEZDd
// https://video.igem.org/w/sNAhZQeeZPNz6fCvnMPqmV
// https://video.igem.org/w/uakpHGXyCvvQFKhGKbKVjY
// https://video.igem.org/w/vd1xPmnGdoz7LiNo43iKBP
// https://video.igem.org/w/2G8U94Ubp6bCK5abA8Gu89


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
            <Row>
                <Col>
                    <iframe title="Bielefeld-CeBiTec: Hamburg Teambuilding (2024)" width="500" height="315"
                            src="https://video.igem.org/videos/embed/vd1xPmnGdoz7LiNo43iKBP" allow="fullscreen"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                </Col>
                <Col>
                    <iframe title="Bielefeld-CeBiTec: Sitcom Team Presentation (2024) [English]" width="500" height="315"
                            src="https://video.igem.org/videos/embed/uakpHGXyCvvQFKhGKbKVjY" allow="fullscreen"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                </Col>
            </Row>
        </>)
    },
    {
        eventKey: "build",
        title: "Supporters",
        content: (<></>)
    }
]