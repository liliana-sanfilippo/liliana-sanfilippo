import React from "react";
import {H2} from "../../components/H2";
import TagCarousel from "../../components/Carousels/TagCarousel";
import {LinkLine} from "../../components/LinkLine";
import {aidareLinks} from "../../data/aidareLinks";

export function Aidare() {

    return (<div>
        Text
        <div className="">
            <a href="https://aidare.org/">https://aidare.org/</a>
            <iframe className="m-auto"
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376995546764419072" height="605"
                    width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>

        </div>
        <section className={"flex flex-col gap-8 lg:gap-16"}>
            <H2>Posts</H2>
            <TagCarousel tag={"aidare"}/>
            <H2>
                Links
            </H2>
            <div className={"row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2"}>
                {aidareLinks.map(link => (
                    <LinkLine url={link.img ?? ""} text={link.linktitle ?? ""} href={link.url}/>))}
            </div>
        </section>

    </div>)
}