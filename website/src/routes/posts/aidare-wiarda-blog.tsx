import React from 'react'
import {SourceBox} from "../../components/boxes/SourceBox";

export const metawiardaBlogAidare = {
    title: "External Blog: Open Models statt OpenAI - Wiarda Blog",
    tags: ["aidare", "ai"],
    spoiler: "",
    slug: "aidare-wiarda",
    date: new Date("2025-09-23"),
    image: "",
    cc: ""
}

export default function aidareWiardaBlog() {


    return (<div className="row align-items-center">
        <SourceBox author={"Jan-Martin Wiarda"}
                   url={"https://www.jmwiarda.de/blog/2025/09/23/open-models-statt-openai"}/>
        <p>
            {/* TODO zusammenfassung*/}
        </p>
        <div className={"col-7 mx-auto"}>
            <iframe className="m-auto"
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7376158271956750336" height="1253"
                    width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
        </div>

    </div>)
}
