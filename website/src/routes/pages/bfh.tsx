import {Video} from "../../More components/Video";
import {GBox, VideoBox} from "../../More components/G_Box";
import PosterCarousel from "../../More components/PosterCarousel";
import {posters25} from "../../data/poster2025";
import {H2, H3} from "../../More components/H2";
import {posters24} from "../../data/poster24";
import {bfhfiles24} from "../../data/bfhfiles24";
import {bfhfiles25} from "../../data/bfhfiles25";
import TabbedBox, {TabData} from "../../components/TabbedBox";
import {othertalks24, talks24, workshops24} from "../../data/talks24";
import {talks25, workshops25} from "../../data/talks25";
import {Row} from "react-bootstrap";
import WinnerCarousel from "../../More components/Carousel";
import {winners24} from "../../data/winners24";
import {winners25} from "../../data/winners25";
import PictureRotation from "../../More components/PictureRotation";
import {bfhimages24} from "../../data/bfhimages24";
import {bfhimages25} from "../../data/bfhimages25";
import {LinkLine} from "../../More components/LinkLine";
import TagCarousel from "../../More components/TagCarousel";
import {InstagramCarousel, LinkedInCarousel} from "../../More components/LinkedInCarousel";
import React from "react";
import {instaurls25, linkedinposts25} from "../../data/bfh-socials-2025";
import {Supporters} from "../../components/Supporters";
import {bfhsupporter25} from "../../data/bfhsupporter25";
import {bfhsupporter24} from "../../data/bfhsupporter24";
import {linkedinposts24} from "../../data/bfh-socials-2024";



const links24 = [
    {
        href: "https://2024.igem.wiki/gu-frankfurt/contribution",
        text: "Wiki of team Frankfurt",
        img: "https://static.igem.wiki/teams/5295/logo.svg"
    },
    {
        href: "https://2024.igem.wiki/bielefeld-cebitec/contribution/?scrollTo=bfh-european-meetup",
        text: "Wiki of team Bielefeld",
        img: "https://static.igem.wiki/teams/5247/logos-team/precyse-no-slogan.png"
    },
    {
        href: "https://2024.igem.wiki/hamburg/education",
        text: "Wiki of team Hamburg",
        img: "https://static.igem.wiki/teams/5077/libelle.png"
    }
]
const links25 = [
    {
        href: "https://2025.igem.wiki/gu-frankfurt/bfh",
        text: "Wiki of team Frankfurt",
        img: "https://static.igem.wiki/teams/5628/images/logos/sprout-pink-white.webp"
    },
    {
        href: "https://2025.igem.wiki/bielefeld-cebitec/home",
        text: "Wiki of team Bielefeld",
        img: "https://static.igem.wiki/teams/5833/teamlogos/cellective-slogan-erweitert-offblack.webp"
    },
    {
        href: "https://2025.igem.wiki/hamburg/outreach#bfh-meet",
        text: "Wiki of team Hamburg",
        img: "https://static.igem.wiki/teams/5561/images/alpaka-navbar.webp"
    }
]

const bfhtabs: TabData[] = [
    {
        eventKey: "first",
        title: "2025",
        content: (
            <div className={"flex flex-col gap-8 lg:gap-16"}>
                <h1>BFH 2025</h1>
                <VideoBox>
                    <GBox background={"https://static.igem.wiki/teams/5833/meetups/bfh/bfh-buttons-min.webp"}>
                        <h3 className="my-auto">170+ attendees</h3>
                        <h3 className="my-auto">26 teams</h3>
                        <h3 className="my-auto">7 countries</h3>
                    </GBox>
                    <GBox background={"https://static.igem.wiki/teams/5628/images/articleimages/groupbfh.webp"}>
                        <h3 className="my-auto">5 workshops</h3>
                        <h3 className="my-auto">? talks</h3>
                    </GBox>
                    <Video url={"https://video.igem.org/videos/embed/4owykB8DWkx8Dwkc5YaMCM"}/>
                </VideoBox>
                <H2>
                    Teams
                </H2>
                <H3>
                    Poster Gallery
                </H3>
                <PosterCarousel posters={posters25}/>
                <H2>
                    Program
                </H2>
                <H3>
                    Workshops
                </H3>
                <TabbedBox  tabs={workshops25} defaultActiveKey="design"/>
                <H3>
                    Talks
                </H3>
                <TabbedBox  tabs={talks25} defaultActiveKey="design"/>
                <H3>
                    Prizes and Winners
                </H3>
                <Row>
                    <WinnerCarousel winners={winners25}/>
                </Row>
                <H2>
                    Supporters
                </H2>
                    <Supporters supporters={bfhsupporter25} />
                <H2>
                    Gallery
                </H2>
                <PictureRotation images={bfhimages25} interval={5000}/>
                <H2>
                    Social Media
                </H2>
                <LinkedInCarousel urls={linkedinposts25}/>
                <InstagramCarousel urls={instaurls25}/>
                <H2>
                    Files
                </H2>
                {/* TODO kaum files */}
                <PosterCarousel posters={bfhfiles25}/>
                <H2>
                    Links
                </H2>
                {/* TODO mehr links*/}
                <div className={"row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2"}>
                    {links25.map(link => (
                        <LinkLine url={link.img} text={link.text} href={link.href}/>
                    ))}
                </div>

            </div>
        )
    },
    {
        eventKey: "second",
        title: "2024    ",
        content: (
            <div className={"flex flex-col gap-8 lg:gap-16"}>
                <h1>BFH 2024</h1>
                <VideoBox>
                    <GBox background={"https://static.igem.wiki/teams/5247/photos/meetup/badges.jpeg"}>
                        <h3 className="my-auto">150+ attendees</h3>
                        <h3 className="my-auto">13 teams</h3>
                        <h3 className="my-auto">6 countries</h3>
                    </GBox>
                    <GBox background={"https://static.igem.wiki/teams/5247/photos/meetup/joern.jpeg"}>
                        <h3 className="my-auto">7 workshops</h3>
                        <h3 className="my-auto">8 talks</h3>
                    </GBox>
                    <Video url={"https://video.igem.org/videos/embed/2G8U94Ubp6bCK5abA8Gu89"}/>
                </VideoBox>
                <H2>
                    Teams
                </H2>
                <H3>
                    Poster Gallery
                </H3>
                <PosterCarousel posters={posters24}/>
                <H2>
                    Program
                </H2>
                <H3>
                    Workshops
                </H3>
                <TabbedBox id={"workshops24"} tabs={workshops24} defaultActiveKey="design"/>
                <H3>
                    Talks
                </H3>
                <TabbedBox tabs={talks24} defaultActiveKey="design"/>
                <TabbedBox tabs={othertalks24} defaultActiveKey="design"/>
                <H2>
                    Prizes and Winners
                </H2>
                <Row>
                    <WinnerCarousel winners={winners24}/>
                </Row>
                <H2>
                    Supporters
                </H2>
                    <Supporters supporters={bfhsupporter24} />
                <H2>
                    Gallery
                </H2>
                <PictureRotation images={bfhimages24} interval={5000}/>
                <H2>
                    Social Media
                </H2>
                    <LinkedInCarousel urls={linkedinposts24}/>
                <H2>
                    Files
                </H2>
                <PosterCarousel posters={bfhfiles24}/>
                <H2>
                    Links
                </H2>
                <p></p>
                <div className={"row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2"}>
                    {links24.map(link => (
                        <LinkLine url={link.img} text={link.text} href={link.href}/>
                    ))}
                </div>
            </div>)
    }
]


export function Bfh() {

    return (
        <div>
            <div className={"row my-5"}>
                <img alt={"BFH European Meetup Logo"} className="mx-auto w-25 mt-5"
                     src="https://static.igem.wiki/teams/5247/logos-team/bfh-with-tagline-black.svg"/>
            </div>
            <section>
                <TagCarousel tag={"bfh"}/>
            </section>
            <section className={"flex flex-col gap-8 lg:gap-16"}>
                <TabbedBox tabs={bfhtabs} defaultActiveKey={"first"}/>
            </section>


        </div>
    )
}