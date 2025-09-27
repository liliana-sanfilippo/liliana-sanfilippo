import React from 'react'
import styles from './document.module.css'
import {LinkedInCarousel} from "../../More components/LinkedInCarousel";
import {Card} from "react-bootstrap";
import {FLink, FurtherLinks} from "../../More components/FurtherLinks";

export const metabfh2024 = {
    title: "BFH European MeetUp 2024",
    tags: ["bfh", "igem"],
    spoiler: "The iGEM team Bielefeld-CeBiTec hosted the first BFH European Meet-Up. Over the course of three full" +
        " days, iGEM teams from across Europe presented their projects, participated in workshops and discussions and were able to get their first external feedback.",
    slug: "bfh-2024",
    date: new Date("2024-05"),
    cc: "Liliana Sanfilippo",
    image: "https://static.igem.wiki/teams/5247/photos/meetup/badges.jpeg"
}

const linkedinposts: string[] = [
"https://www.linkedin.com/embed/feed/update/urn:li:share:7188957114109673472?collapsed=1",
"https://www.linkedin.com/embed/feed/update/urn:li:share:7199356996272226304?collapsed=1"
]

const furtherlinks: FLink[] = [
    {
        linktitle: "Program",
        url: "https://2024.igem.wiki/bielefeld-cebitec/contribution/?scrollTo=BFH%20European%20MeetUp1",
        text: "Website team Bielefeld-CeBiTec"
    },
    {
        text: "Website team Hamburg",
        url: "https://2024.igem.wiki/hamburg/education"
    }
]

// Todo zweiter Absatz überprüfen
// Todo hinzufügen wie das organisiert wurde
// Todo hinzufügen was ich da gemacht habe
// Todo Gruppenfoto & Foto wie ich fotografiere
export default function bfh2024() {
    return (
        <div className={styles.Welcome}>
            <p>
                This year, the iGEM team Bielefeld-CeBiTec hosted the first BFH European Meet-Up.
                This event was designed to unite iGEM teams from across Europe and beyond, providing a platform for sharing ideas and fostering international connections during the early stages of the iGEM competition.
                Over the course of three full days, the teams presented their projects, participated in workshops and discussions and were able to get their first external feedback.
            </p>
            <p>Meetups are an essential part of forming the iGEM community and offer a platform of exchanging ideas and enthusiasm, but most iGEM MeetUps take place in the middle of the year or shortly before the jamboree. The BFH European MeetUp took place earlier than most MeetUps to facilitate project collaborations between teams and to allow a high number of teams to participate, since most teams get busier as the iGEM year goes on. Further, May is a good time to get feedback and advice from other students and professionals to avoid major mistakes and running into dead ends from the get go. Usually, teams are already actively working on specific ideas, but it is still possible to implement bigger changes.</p>
            <h2>Highlights</h2>
            <div className="row">
                <div className="col-6 my-3">
                    <Card className="article-summary">
                        <div className="img-container">
                            <Card.Img variant="top"
                                      src="https://static.igem.wiki/teams/5247/photos/meetup/posterexhibition-teddy.jpg"/>
                            <div className="bottom-right">Bottom Right</div>
                        </div>
                        <Card.Body>
                            <Card.Title>Poster Exhibitions and Project Presentations</Card.Title>
                            <Card.Text>
                                Every attending team had the opportunity to present their projects at their booths
                                during the poster exhibition.
                                See the <a
                                href="https://2024.igem.wiki/bielefeld-cebitec/contribution/?scrollTo=BFH%20European%20MeetUp4">Virtual
                                Poster Exhibition</a>.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 my-3">
                    <Card className="article-summary">
                        <Card.Img variant="top" src="https://static.igem.wiki/teams/5247/photos/meetup/hall.jpeg"/>
                        <Card.Body>
                            <Card.Title>"PEP" Talks</Card.Title>
                            <Card.Text>
                            iGEM alumnis shared their experiences throughout their journeys in the iGEM competition, particularly focusing on how they worked towards winning special prizes, as part of the "Peers Engage Peers" talk series.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 my-3">
                    <Card className="article-summary">
                        <Card.Img variant="top" src="https://bfh-euromeet.de/assets/workshop-kV5kD_9C.webp"/>
                        <Card.Body>
                            <Card.Title>Workshops</Card.Title>
                            <Card.Text>
                                The workshop topics included Safe Science, using Kernel provided by Asimov, Science Communication, Multimedia, HTML coding, Artificial Intelligence, and Pitching Your Project.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 my-3">
                    <Card className="article-summary">
                        <Card.Img variant="top" src="https://bfh-euromeet.de/assets/vip-C4JYB4yK.webp"/>
                        <Card.Body>
                            <Card.Title>Special Guests</Card.Title>
                            <Card.Text>
                                Nemanja Stijepovic, Executive Vice President of the iGEM Foundation, gave an inspiring talk. Traci Haddock, Director of Community at Asimov, held an eye-opening workshop.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 my-3">
                    <Card className="article-summary">
                        <Card.Img variant="top" src="https://bfh-euromeet.de/assets/scientific_talk-CSgoJ-aw.webp"/>
                        <Card.Body>
                            <Card.Title>Scientific Talks</Card.Title>
                            <Card.Text>
                                Researchers presented their current breakthroughs in synthetic biology.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 my-3">
                    <Card className="article-summary">
                        <Card.Img variant="top" src="https://bfh-euromeet.de/assets/networking-DG4lXYy6.webp"/>
                        <Card.Body>
                            <Card.Title>Collaborations and networking</Card.Title>
                            <Card.Text>
                                During lunch and breaks, in between program points, and during the poster exhibition all teams had the chance to socialize and connect.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 my-3">
                    <Card className="article-summary">
                        <Card.Img variant="top" src="https://static.igem.wiki/teams/5247/photos/meetup/aachen.jpeg"/>
                        <Card.Body>
                            <Card.Title>Awards</Card.Title>
                            <Card.Text>
                              The teams' presentations and poster booths were evaluated by judges and the winners awarded monetary or material prizes provided by our sponsors. This served the purpose to further support teams in their project journey.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 my-3">
                    <Card className="article-summary">
                        <Card.Img variant="top" src="https://static.igem.wiki/teams/5247/photos/meetup/kristian.jpeg"/>
                        <Card.Body>
                            <Card.Title>Panel Discussion</Card.Title>
                            <Card.Text>
                                At the Grand Jamboree, many panel discussions will take place all day. To introduce the new iGEMers to the concept of these discussions and how fruitful they can be, a panel discussion with people who are deeply connected to the iGEM competition was held.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <h2>Aftermovie</h2>
            <p>
                <iframe title="Bielefeld-CeBiTec: BFH European Meet-up (2024) [English]" width="100%" height="500vh" src="https://video.igem.org/videos/embed/2G8U94Ubp6bCK5abA8Gu89" allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                <small>Video, voiceover and post production by our head od Creativity: <a href="https://www.instagram.com/michagree/">Michael Gröning</a>.</small>
            </p>
            <h2>See also:</h2>
            <LinkedInCarousel urls={linkedinposts}/>
            <FurtherLinks flinks={furtherlinks}/>
        </div>
    )
}
