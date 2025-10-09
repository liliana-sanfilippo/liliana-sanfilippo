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
                        <h3 className="my-auto">X talks</h3>
                        <h3 className="my-auto">X talks</h3>
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
                <TabbedBox id={"workshops25"} tabs={workshops25} defaultActiveKey="design"/>
                <H3>
                    Talks
                </H3>
                <TabbedBox tabs={talks25} defaultActiveKey="design"/>
                <H3>
                    Prizes and Winners
                </H3>
                <Row>
                    <WinnerCarousel winners={winners25}/>
                </Row>
                <H2>
                    Supporters
                </H2>
                <H2>
                    Gallery
                </H2>
                <H2>
                    Social Media
                </H2>
                <H2>
                    Files
                </H2>
                <PosterCarousel posters={bfhfiles25}/>
                <H2>
                    Links
                </H2>
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
                        <h3 className="my-auto">x countries</h3>
                    </GBox>
                    <GBox background={"https://static.igem.wiki/teams/5247/photos/meetup/joern.jpeg"}>
                        <h3 className="my-auto">7 workshops</h3>
                        <h3 className="my-auto">X talks</h3>
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
                <H3>
                    Prizes and Winners
                </H3>
                <Row>
                    <WinnerCarousel winners={winners24}/>
                </Row>
                <H2>
                    Supporters
                </H2>
                <H2>
                    Gallery
                </H2>
                <H2>
                    Social Media
                </H2>
                <H2>
                    Files
                </H2>
                <PosterCarousel posters={bfhfiles24}/>
                <H2>
                    Links
                </H2>
            </div>)
    }
]


export function Bfh() {

    return (
        <div className={"mx-5"}>
            <div className={"row my-5"}>
                <img alt={"BFH European Meetup Logo"} className="mx-auto w-25 mt-5"
                     src="https://static.igem.wiki/teams/5247/logos-team/bfh-with-tagline-black.svg"/>
            </div>
            <section className={"flex flex-col gap-8 lg:gap-16"}>
                <TabbedBox tabs={bfhtabs} defaultActiveKey={"first"}/>
            </section>


        </div>
    )
}