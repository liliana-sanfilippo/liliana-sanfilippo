import React from "react";
import {Section} from "@liliana-sanfilippo/react-wiki-components";
import IGEMTimeline from "../../components/IGEMTimeline";
import {igemtimeline} from "../../data/igem/igemtimeline";

export function StartingAsAdvisor() {

    return (
        <div>
            <Section title={"Timeline"}>
                (Not final)
                <IGEMTimeline items={igemtimeline}/>
            </Section>
        </div>
    )
}
