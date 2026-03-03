import React from "react";
import {Section} from "@liliana-sanfilippo/react-wiki-components";
import IGEMTimeline from "../../components/IGEMTimeline";
import {igemtimeline} from "../../data/igem/igemtimeline";

export function StartingAsAdvisor() {

    return (
        <div>
            {/*
                 <p> A Printable checklist is below. </p>
            */}
            <Section title={"Timeline"}>
                (Not final)
                <IGEMTimeline items={igemtimeline}/>
            </Section>
             <Section title={"Printable Checklist"}>
                 {/*
                <h3>Before the first team meeting</h3>
                <p>Before the first team meeting, ideally</p>
                <p>
                    <ul>
                        <li><input type="checkbox" disabled/> set up a form where everyone can enter their contact info
                        </li>
                        <li><input type="checkbox" disabled/> move the old emails to the archive</li>
                        <li><input type="checkbox" disabled/> already have a list of points of contact for the team for
                            things
                            such as ordering
                        </li>
                    </ul>
                </p>
                <h3>iGEM introduction</h3>
                <p>Create realistic expectations regarding workload, credits and required amount of work.</p>
                <p>
                    <ul>
                        <li><input type="checkbox" disabled/> Give the iGEM introductory presentation</li>
                        <li><input type="checkbox" disabled/> If there is time: speak with the team members about their
                            expectations and what commitment they plan to make to the project
                        </li>
                    </ul>
                </p>
                <h3>Getting everyone access and started</h3>

                <p>
                    Everyone should have or request:
                </p>
                <p>
                    <ul>
                        <li><input type="checkbox"/> a CeBiTec account</li>
                        <li><input type="checkbox" disabled/> a Sciebo account</li>
                        <li><input type="checkbox" disabled/> access to a personal or university computer/laptop
                        </li>
                        <li><input type="checkbox" disabled/> Schließberechtigung</li>
                    </ul>
                </p>
                <p>
                    Further steps:
                </p>
                <ul>
                    <li><input type="checkbox" disabled/> a communication medium is chosen (group chat -
                        WhatsApp, Matrix, etc.)
                    </li>
                    <li><input type="checkbox" disabled/> everyone signs the Vertragserklärung</li>
                    <li><input type="checkbox" disabled/> add everyone to the Sciebo team for file access</li>
                    <li><input type="checkbox" disabled/> choose preliminary meeting dates</li>
                    <li><input type="checkbox" disabled/> have everyone prepare a slide about themselves for
                        the second meeting
                    </li>
                </ul>
                <h3>After the team is established</h3>
                <ul>
                    <li><input type="checkbox" disabled/> request access to the team email for everyone</li>
                    <li><input type="checkbox" disabled/> get everyone access to the shared Zotero</li>
                    <li><input type="checkbox" disabled/> make sure everyone knows how to use Zotero</li>
                    <li><input type="checkbox" disabled/> get the permission slips for the multimedia lab</li>
                    <li><input type="checkbox" disabled/> evaluate the skillsets everyone brings (lab, wiki, etc.)</li>
                    <li><input type="checkbox" disabled/> HP and ethics workshop</li>
                    <li><input type="checkbox" disabled/> plan team building</li>
                    <li><input type="checkbox" disabled/> PowerPoint workshop</li>
                </ul>
                <h4>Knowledge</h4>
                <p>
                    It has to be made sure that everyone
                </p>
                <ul>
                    <li><input type="checkbox" disabled/> knows how to use Sciebo</li>
                    <li><input type="checkbox" disabled/> knows how to use Thinlinc and the CeBiTec VPN</li>
                    <li><input type="checkbox" disabled/> has the links for the CeBiTec intranet, mail and
                        Thinlinc
                    </li>
                    <li><input type="checkbox" disabled/> knows how to use the team email</li>
                </ul>

                And have/train at least one person that
                <ul>
                    <li><input type="checkbox" disabled/> is familiar with the ordering system (three offer rule etc.)
                    </li>
                    <li><input type="checkbox" disabled/> knows how to fill out travel permission and reimbursement
                        forms
                    </li>
                </ul> */}
                <h3>Before the lab</h3>
                <ul>
                    <li><input type="checkbox" disabled/> have the PI do the safety instructions</li>
                </ul>
                <h3>Other</h3>
                <ul>
                    <li><input type="checkbox" disabled/> Show how the Geneious database works and can be accessed
                    </li>
                    <li><input type="checkbox" disabled/> Get the team the introduction at the MultimediaLab</li>
                    <li><input type="checkbox" disabled/> If needed, look for people with the skills the team is
                        missing
                    </li>
                    <li><input type="checkbox" disabled/> Microphone usage workshop</li>
                </ul>
            </Section>
        </div>
    )
}

// <li><input type="checkbox" disabled/> </li>
