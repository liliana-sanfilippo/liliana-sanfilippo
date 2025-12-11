import TabbedBox, {TabData} from "../../components/boxes/TabbedBox";
import {Precyse} from "./precyse";
import {Cellective} from "./cellective"
import {GBox, VideoBox} from "../../components/boxes/G_Box";
import {Video} from "../../components/media/Video";
import React from "react";

export function IgemBielefeld() {


    return (<div>
        <div className={"row my-5"}>
            <img alt={"iGEM Bielefeld Logo"} className="mx-auto w-25 mt-5"
                 src="https://static.igem.wiki/teams/5247/logos-team/igem-bielefeld-logo-our-colours.png"/>
        </div>
        <section className={"flex flex-col gap-8 lg:gap-16"}>
            <TabbedBox tabs={igembielefeldTabs} defaultActiveKey={"first"}/>
        </section>
    </div>)
}


const igembielefeldTabs: TabData[] = [{
    eventKey: "first", title: "2024", content: (<Precyse/>)
}, {
    eventKey: "second", title: "2025", content: (<Cellective/>)
}]

