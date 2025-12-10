import {Citations} from "@liliana-sanfilippo/react-bibtex-reference-generator";


export function PublicationInfo({bibtex, abstract, link}: { bibtex: string, abstract: string, link?: string }) {
    return (<>
        <p>{abstract}</p>
        <p>Citation:</p>
        <Citations bibtexSources={[bibtex]} style={"acs"}/>
        {link && <>
            <p>Link:</p>
            <ul>
                <li><a href={link}>{link}</a></li>
            </ul>
        </>

        }
    </>)
}

