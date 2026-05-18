import {Accordion} from "react-bootstrap";
import {CVItem} from "../../components/cvItem";
import {awards, edu, workEx} from "../../data/cvData";
import {H2} from "../../components/H2";

export function Cv() {
    return (<section>
        <Accordion>
            <H2>Work Experience</H2>
            {workEx.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Academic Education</H2>
            {edu.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Awards</H2>
            {awards.map(item => (
                <CVItem props={item}/>
            ))}
        </Accordion>
    </section>)
}