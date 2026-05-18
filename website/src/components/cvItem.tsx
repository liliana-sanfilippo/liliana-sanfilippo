import {Accordion, AccordionItem, Row} from "react-bootstrap";
import {iconMap} from "./media/Icons";

export interface CVItemProps {
    date: string,
    stelle: string,
    desc?: string,
    inst: string,
    eventkey: string,
    body: React.ReactNode,
    skills: string[],
    id?: string
}

export function CVItem({props}: { props: CVItemProps }) {
    const classname = "filterable all show " + props.skills.join(' ');
    return (
        <AccordionItem eventKey={props.eventkey} className={classname}>
            <Accordion.Header>
                <span className="cv-year">{props.date}</span>
                <span className="cv-stelle">{props.stelle}</span>
                <span className="cv-desc">{props.desc}</span>
                <span className="cv-inst">{props.inst}</span>
            </Accordion.Header>
            <Accordion.Body>
                {props.body}
                <Row>
                    {props.skills.map(skill => (
                        iconMap[skill]
                    ))}
                </Row>
            </Accordion.Body>
        </AccordionItem>
    )
}


