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
import {Link} from "react-router-dom";

export function Cv() {

    return (<section>
        <h2>Work Experience</h2>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <span className="cv-year">Sep. 2023 - today</span>
                    <span className="cv-stelle">Student assistant</span>
                    <span className="cv-desc">for the working group&nbsp;
                        <Link to={"www.uni-bielefeld.de/fakultaeten/technische-fakultaet/arbeitsgruppen/kml/"}>
                             Knowledge Representation and Machine Learning
                        </Link>
                    </span>&nbsp;at
                    <span className="cv-inst"> Universität Bielefeld </span>
                </Accordion.Header>
                <Accordion.Body>
                    <p>Development of an interactive counselling system that is available around the clock to students
                        and prospective students at the Technical Faculty, capable of answering common questions.</p>
                    <p><b>Associated with:</b></p>
                    <ul className={"list-disc mb-5"}>
                        <li><Link to={"/current-projects/intelligent-counselling-system"}>An Intelligent Counselling
                            System for Student Counselling</Link></li>
                    </ul>
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
                    <span className="cv-stelle">Bachelor Studies</span>
                    <span className="cv-desc"> Bioinformatics and Genome Research</span>
                    &nbsp;at
                    <span className="cv-inst">Universität Bielefeld</span>
                </Accordion.Header>
                <Accordion.Body>
                    <p><b>Associated with:</b></p>
                    <ul className={"list-disc mb-5"}>
                        <li><a href={"#awards"}>2nd place for the software project LexArtes</a></li>
                    </ul>
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
        <h2 id={"awards"}>Awards</h2>
        <Accordion>
            <Accordion.Item eventKey="6">
                <Accordion.Header>
                    <span className="cv-year">Oct. 2025</span>
                    <span className="cv-stelle">Silver Medal</span>
                    <span className="cv-desc"> for the iGEM project Cellective</span>
                    <span className="cv-inst">iGEM Foundation</span>
                </Accordion.Header>
                <Accordion.Body>
                    <p>
                        Cellective is a riboswitch-based therapeutic platform that selectively targets cancer cells by
                        detecting specific microRNAs and mRNAs, subsequently translating a cellular kill system. This
                        platform is intended to be further developed specifically for the treatment of triple-negative
                        breast cancer (TNBC), a particularly aggressive and hard-to-treat form of breast cancer.
                        The selective detection of cancer-specific marker RNAs using the engineered riboswitch RNAs
                        enables a highly specific, minimally invasive therapy that spares healthy cells and is only
                        activated in tumor-relevant contexts. The modular design allows for flexible adaptation to
                        different tumor types and RNA profiles, allowing personalized medicine. We successfully
                        engineered this therapeutic system and confirmed its functionality.
                    </p>
                    <p><b>More information:</b></p>
                    <ul className={"list-disc mb-5"}>
                        <li><a href={"https://2025.igem.wiki/bielefeld-cebitec/description"}>Cellective Wiki</a></li>
                    </ul>
                    <p><b>Associated with:</b></p>
                    <ul className={"list-disc mb-5"}>
                        <li><a href={"#volunteering"}>Volunteering "Team Advisor"</a></li>
                        <li><Link to={"/current-projects/igem-bielefeld"}>iGEM Bielefeld</Link></li>
                    </ul>
                    <Row>
                        <Typescript/> <Javascript/>
                        <Css/> <HtmlIcon/>
                        <BootstrapFill/> <ReactIcon/>
                        <Gitlab/> <IntellijIcon/>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" id={"lexartes"}>
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
                    <p>
                        PreCyse is a next-generation Prime Editing technology, an innovative gene therapy approach for
                        Cystic Fibrosis (CF) specifically targeting the most common mutation F508del of the CFTR gene.
                        Cystic Fibrosis is a severe disorder that primarily affects the lungs and for which only
                        short-term symptomatic treatments exist. PreCyse aims to provide long-term relief by delivering
                        a small genetic payload with speed and precision. Our approach integrates PrimeGuide, a highly
                        optimized Prime Editing system, with AirBuddy, a novel lipid nanoparticle (LNP) delivery
                        platform. The SORT LNPs used in AirBuddy are optimized for pulmonary delivery, offering precise
                        organ targeting and structural stability throughout the inhalation process. Small payload size
                        is key for effective delivery and compatibility with viral vectors, which have a limited
                        capacity. PrimeGuide embodies this vision by utilizing a smaller, more efficient editing
                        complex. Current treatments often require daily administration whereas PreCyse is currently
                        developed as a monthly applied therapy. In addition, Prime Editing holds the promise to offer a
                        causal cure, when mutations are corrected in stem cells. Our approach aims to reduce medication
                        frequency while improving patient outcomes. By lowering costs and improving accessibility,
                        PreCyse aspires to offer an advanced and user-friendly cure for Cystic Fibrosis.
                    </p>
                    <p><b>More information:</b></p>
                    <ul className={"list-disc mb-5"}>
                        <li><a href={"https://2024.igem.wiki/bielefeld-cebitec/description"}>PreCyse Wiki</a></li>
                    </ul>
                    <p><b>Associated with:</b></p>
                    <ul className={"list-disc mb-5"}>
                        <li><a href={"#publications"}>Publication "Towards effective cystic fibrosis gene therapy by
                            optimizing prime editing and pulmonary-targeted LNPs"</a></li>
                        <li><a href={"#volunteering"}>Volunteering "Head of Web Developement"</a></li>
                        <li><Link to={"/current-projects/igem-bielefeld"}>iGEM Bielefeld</Link></li>
                    </ul>
                    <Row>
                        <Typescript/> <Javascript/>
                        <Css/> <HtmlIcon/>
                        <BootstrapFill/> <ReactIcon/>
                        <Gitlab/> <IntellijIcon/>
                    </Row>
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
        <h2 id={"publications"}>Publications</h2>
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
                    <p><b>Associated with:</b></p>
                    <ul className={"list-disc"}>
                        <li><Link to={"/current-projects/igem-bielefeld"}>iGEM Bielefeld-CeBiTec - PreCyse</Link></li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        {/*
         <h2>Software</h2>

        <h2>Outreach & Press</h2>
        */}

    </section>)
}