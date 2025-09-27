import {Card} from "react-bootstrap";


export interface FLink{
    linktitle?: string
    text: string,
    url: string
}


export function FurtherLinks({flinks, title}: { flinks: FLink[], title?: string}) {

    return(
        <>
            <Card className="my-4" style={{ width: '100%', border: "solid 1px var(--lightblue-drei)" }}>
                <Card.Body>
                    <Card.Title>{title ? title : <>Further Links:</>}</Card.Title>
                    <Card.Text>
                      <ul style={{listStyle: "none"}}>
                          {flinks.map( (flink) => (
                                    <li>
                                        {flink.text}: <a href={flink.url}>{flink.linktitle ? flink.linktitle : flink.url}</a>
                                    </li>
                              )
                              )
                          }
                      </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}