import React from "react";
import {H2} from "../../More components/H2";
import TagCarousel from "../../More components/TagCarousel";

export function Aidare() {

    return (
        <div className={"mx-5"}>
            Text
            <div className="">
              <a href="https://aidare.org/">https://aidare.org/</a>
                <iframe className="m-auto" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376995546764419072" height="605"
                        width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>

            </div>
           <section>
               <H2>Posts</H2>
               <TagCarousel tag={"aidare"}/>
           </section>

        </div>
    )
}