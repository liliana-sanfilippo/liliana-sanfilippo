import {Accordion, Row} from "react-bootstrap";
import {BootstrapFill, Css, Github, Gitlab, Javascript, Typescript, Ubuntu} from 'react-bootstrap-icons';
import {
    AngularIcon,
    CounsellingIcon,
    HtmlIcon,
    IntellijIcon,
    JavaIcon,
    PythonIcon,
    ReactIcon,
    SpringbootIcon,
    TailwindIcon,
    VscIcon,
    VueIcon
} from "../../components/media/Icons";
import {PublicationInfo} from "../../components/PublicationInfo";
import {cfpaper} from "../../data/publications";

export function Cv() {

    return (<section>
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
                    <Row>
                        <Typescript/> <Javascript/> <PythonIcon/>
                        <Css/> <HtmlIcon/>
                        <BootstrapFill/> <AngularIcon/>
                        <Gitlab/> <VscIcon/>
                        <CounsellingIcon/>
                    </Row>
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
                    <Row>
                        <Typescript/> <Javascript/> <JavaIcon/> <PythonIcon/>
                        <Css/> <HtmlIcon/>
                        <BootstrapFill/>
                        <VscIcon/> <IntellijIcon/>
                        <Github/>
                        <Ubuntu/>
                    </Row>
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
                    <Row>
                        <Typescript/> <Javascript/>
                        <Css/> <HtmlIcon/>
                        <BootstrapFill/> <ReactIcon/>
                        <Gitlab/> <IntellijIcon/>
                    </Row>
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
                    <Row>
                        <Typescript/> <JavaIcon/>
                        <Css/> <HtmlIcon/>
                        <BootstrapFill/> <TailwindIcon/> <VueIcon/>
                        <SpringbootIcon/>
                        <Github/> <IntellijIcon/>
                    </Row>
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
        <h2>Publications</h2>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <span className="cv-year">Dec. 2025</span>
                    <span className="cv-stelle">Towards effective cystic fibrosis gene therapy by optimizing prime editing and pulmonary-targeted LNPs</span>
                </Accordion.Header>
                <Accordion.Body>
                    <PublicationInfo
                        bibtex={cfpaper}
                        link={"https://doi.org/10.3389/fsysb.2025.1603749"}
                        abstract={"Cystic fibrosis (CF) is the most prevalent inherited disease. Inactivating mutations in the Cystic Fibrosis Transmembrane Conductance Regulator (CFTR) gene lead to the accumulation of viscous mucus and subsequent respiratory complications. This study optimized a prime editing (PE) approach to correct CFTR mutations focusing on the F508del mutation. Prime editing allowed to introduce missing bases without double-strand breaks using a Cas9-nickase fused with a reverse transcriptase in combination with a prime editing guide RNA (pegRNA). Various self-designed pegRNAs were compared. For delivery, various lipid nanoparticles (LNP) were tested, which were optimized for stability and lung cells targeting based on lipid selection or chitosan complexion. A fluorescence reporter system, pPEAR_CFTR, was developed mimicking F508del for validation. The five pegRNAs yielding the highest efficiency were used for genomic CFTR correction in a CF bronchial cell line. Nanopore sequencing of genomic DNA revealed approximate 5% edited reads. These results highlight the promise of prime editing-LNP systems for precise and lung-specific gene correction, paving the way for novel therapies in cystic fibrosis and other pulmonary genetic disorders."}
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <h2>Software</h2>

        <h2>Outreach & Press</h2>
    </section>)
}