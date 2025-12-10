import {Button, Card} from "react-bootstrap";
import {WikiPage} from "../../components/wiki/WikiPage";
import {IssuesList} from "../../components/github/IssuesList";

export function React() {

    return (<div className={"flex flex-col gap-8 lg:gap-16"}>
        <h1>The Bibtex Reference Manager for React</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <h2>Highlighted:</h2>
        <div className={"row gap-8 lg:gap-16 m-auto"}>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>For iGEMers</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Go directly to the manual for iGEM wikis
                    </Card.Text>
                    <Button href="/liliana-sanfilippo/react-reference-manager/Manual-for-iGEM-Wikis" variant="outline-primary">iGEM Manual</Button>
                </Card.Body>
                <Card.Footer className="text-muted">automatically updates weekly</Card.Footer>
            </Card>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>Documentation</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Manuals, feature lists and troubleshooting help
                    </Card.Text>
                    <Button href="/liliana-sanfilippo/react-reference-manager/Home" variant="outline-primary">Bibtex
                        manager wiki</Button>
                </Card.Body>
                <Card.Footer className="text-muted">automatically updates weekly</Card.Footer>
            </Card>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>Collaborate!</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Browse or create issues and request features
                    </Card.Text>
                    <Button href="/liliana-sanfilippo/react-reference-manager/#issues"
                            variant="outline-primary">Issues</Button>
                </Card.Body>
                <Card.Footer className="text-muted">live</Card.Footer>
            </Card>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>README</Card.Header>
                <Card.Body>
                    <Card.Text>
                        See above for the repository README
                    </Card.Text>
                    <Button href="/liliana-sanfilippo/react-reference-manager/#readme" variant="outline-primary">GitHub
                        README</Button>
                </Card.Body>
                <Card.Footer className="text-muted">automatically updates weekly</Card.Footer>
            </Card>
        </div>
        <h2 id={"readme"}>The Readme</h2>
        <WikiPage page={"README"}/>
        <IssuesList/>


    </div>)
}