import {Accordion} from "react-bootstrap";
import { Typescript } from 'react-bootstrap-icons';

import {Row, Col} from "react-bootstrap";

export function Cv() {

    return (
        <section>
            <h2>Work Experience</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <span className="cv-year">Sep. 2023 - today</span>
                        <span className="cv-stelle">Student assistant</span>
                        <span className="cv-desc"> for the development of an interactive counselling system</span>
                        <span className="cv-inst">Universität Bielefeld</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row><Typescript/>    </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h2>Academic Education</h2>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <span className="cv-year">Oct. 2022 - today</span>
                        <span className="cv-stelle">Bachelor</span>
                        <span className="cv-desc"> Bioinformatics and Genome Research</span>
                        <span className="cv-inst">Universität Bielefeld</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h2>Awards</h2>
            <Accordion>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        <span className="cv-year">Oct. 2025</span>
                        <span className="cv-stelle">Silver Medal</span>
                        <span className="cv-desc"> for the iGEM project Cellective</span>
                        <span className="cv-inst">iGEM Foundation</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <span className="cv-year">Oct. 2025</span>
                        <span className="cv-stelle"> 2nd place </span>
                        <span className="cv-desc"> for the software project LexArtes</span>
                        <span className="cv-inst">LexMea</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <span className="cv-year">Oct. 2024</span>
                        <span className="cv-stelle">Best Integrated Human Practices, Safety and Security, Best Presentation and Gold Medal</span>
                        <span className="cv-desc"> for the iGEM project PreCyse</span>
                        <span className="cv-inst">iGEM Foundation</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h2>Academic Functions</h2>
            <Accordion>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <span className="cv-year">May 2025</span>
                        <span className="cv-desc">Participated in Workshop on AI and Autonomy in Higher Education</span>
                        <span className="cv-inst">Center for Interdisciplinary Research</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <span className="cv-year">May 2025</span>
                        <span className="cv-stelle">Frontend Developer and Photographer</span>
                        <span className="cv-inst">BFH European MeetUp Conference 2025</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/*
            <h2> Certifications </h2>
            */}
            {/*
            <h2> Publications </h2>
            */}
            <h2>Volunteering</h2>
            <Accordion>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <span className="cv-year">Dec. 2024 - today</span>
                        <span className="cv-stelle"> Team Advisor</span>
                        <span className="cv-inst">iGem Bielefeld-Cebitec</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <span className="cv-year">Feb. 2024 - Dec. 2024</span>
                        <span className="cv-stelle"> Head of Web Developement</span>
                        <span className="cv-inst">iGem Bielefeld-Cebitec</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <span className="cv-year">Sept. 2023 - today</span>
                        <span className="cv-stelle"> Student Counselling </span>
                        <span className="cv-desc"> at the technical faculty</span>
                        <span className="cv-inst">Universität Bielefeld</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <span className="cv-year">Apr. 2023 - Aug. 2023</span>
                        <span className="cv-stelle"> Krötenwanderung </span>
                        <span className="cv-inst">Bielefeld</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <span className="cv-year">Aug. 2021 - Jan. 2022 </span>
                        <span className="cv-stelle">Integration work</span>
                        <span className="cv-inst">Welcome House Braunschweig</span>
                    </Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h2>Software</h2>

            <h2>Outreach & Press</h2>
        </section>
    )
}