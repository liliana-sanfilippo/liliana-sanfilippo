import React from 'react'
import {SourceBox} from "../../More components/SourceBox";
export const metazifBlogAidare  = {
    title: "Workshop: Artificial Intelligence and Digital Autonomy in Research and Education",
    tags: ["aidare", "ai", "zif"],
    spoiler: "",
    slug: "aidare-zif-blog",
    date: new Date("2025-09-22")
}

export default function zifBlogAidare() {


    return (
        <>
            <SourceBox author={"Zentrum für interdisziplinäre Forschung"}
                       url={"https://blogs.uni-bielefeld.de/blog/zif/entry/artificial-intelligence-and-digital-autonomy"}/>
            <div className="zif-embed   row section__row section__main">
                <div className="col-12">
                    <div className="section__topper bg-light p-3 d-inline-block text-muted my-3">
                        Veröffentlicht am
                        22. September 2025<br/>
                        <div>
                            Kategorie:
                            <a href="https://blogs.uni-bielefeld.de/blog/zif/category/Allgemein#mainSection"
                               className="entryteaser__categorylink fw-bold text-decoration-underline"><span
                                className="text-muted">Allgemein</span></a>
                        </div>
                    </div>
                    <h2 className="section__headline mt-3">Artificial Intelligence and Digital Autonomy in Research and
                        Education<br/>
                    </h2>
                    <div className="section_content section__content--main">
                        <p>Since the release of ChatGPT, Artificial Intelligence (AI) appears to have taken the world of
                            higher education by storm. In order to develop sustainable visions and frameworks that
                            can&nbsp;be put into practice, interdisciplinary research and collaboration is sorely
                            needed. Therefore, the interdisciplinary ZiF-workshop “<a
                                href="https://www.uni-bielefeld.de/einrichtungen/zif/events/#/event/7769"
                                target="_blank">Rearticulating Autonomy. Artificial Intelligence and Digital Autonomy in
                                Higher Education</a>”, convened by Benjamin Paaßen (Bielefeld), Amrei Bahr (Stuttgart)
                            and Maximilian Mayer (Bonn) aimed to consolidate and merge currently separate streams of
                            research concerning the autonomy of learners, teachers, researchers, and higher education
                            institutions in the age of artificial intelligence.
                        </p><p>One outcome of this workshop was the establishment of the interdisciplinary network "<a
                        href="https://aidare.org/" target="_blank">Artificial Intelligence and Digital Autonomy in
                        Research and Education</a>" (AIDARE) which aims to support a safe and diversified AI
                        infrastructure that supports rather than undermines digital autonomy of students, teachers,
                        researchers, and the university as a whole.
                    </p><p>The&nbsp;network's kick-off paper can now be found <a
                        href="https://aidare.org/ai-infrastructure-for-digital-autonomy-in-universities/"
                        target="_blank">here</a>.</p><p><a
                        href="https://blogs.uni-bielefeld.de/blog/zif/mediaresource/bb6662f9-cf0f-486e-ba54-b1f72bcf4f39"><img
                        style={{width:"25%"}} alt="05-07-Paassen.jpg"
                        src="https://blogs.uni-bielefeld.de/blog/zif/mediaresource/bb6662f9-cf0f-486e-ba54-b1f72bcf4f39"/></a><br/>
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}
