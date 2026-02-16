import React from "react";
import {Section, Subesection} from "@liliana-sanfilippo/react-wiki-components";

export function StartingAsAdvisor() {

    return (
        <div>
            <div className={"row my-5"}>
                <Section title={"Before the first team meeting"}>
                    <p>Before the first team meeting, ideally</p>
                    <ul>
                        <li><input type="checkbox" disabled/> set up a form where everyone can enter their contact info
                        </li>
                        <li><input type="checkbox" disabled/> move the old emails to the archive</li>
                    </ul>
                </Section>
                <Section title={"Getting everyone access and started"}>
                    {/*
                        <Subesection title={"Bielefeld specific"}>
                            j
                        </Subesection>
                    */}
                    <p>
                        Everyone should have or request:
                    </p>
                    <ul>
                        <li><input type="checkbox"/> a CeBiTec account</li>
                        <li><input type="checkbox" disabled/> a Sciebo account</li>
                        <li><input type="checkbox" checked disabled/> access to a personal or university computer/laptop
                        </li>
                        <li><input type="checkbox" disabled/> Schließberechtigung</li>
                    </ul>
                    <p>
                        Further steps:
                    </p>
                    <ul>
                        <li><input type="checkbox" checked disabled/> a communication medium is chosen (groupchat -
                            WhatsApp, Matrix, etc.)
                        </li>
                        <li><input type="checkbox" disabled/> everyone signs the Vetragserklärung</li>
                        <li><input type="checkbox" disabled/> add everyone to the Sciebo team for file access</li>
                        <li><input type="checkbox" checked disabled/> choose preliminary meeting dates</li>
                        <li><input type="checkbox" checked disabled/> have everyone prepare a slide about themselves for
                            the second meeting
                        </li>
                    </ul>
                    <Subesection title={"iGEM introduction"}>
                        <ul>
                            <li><input type="checkbox" checked disabled/> Give the iGEM introductory presentation</li>
                        </ul>
                    </Subesection>
                </Section>
                <Section title={"After the team is established"}>
                    <ul>
                        <li><input type="checkbox" disabled/> request access to the team email for everyone</li>
                        <li><input type="checkbox" disabled/> get everyone access to the shared Zotero</li>
                        <li><input type="checkbox" disabled/> make sure everyone knows how to use Zotero</li>
                        <li><input type="checkbox" disabled/> get the permission slips for the multimedia lab</li>
                        <li><input type="checkbox" disabled/> evaluate the skillsets everyone brings (lab, wiki, etc.)</li>
                        <li><input type="checkbox" disabled/> HP and ethics workshop </li>
                        <li><input type="checkbox" disabled/> plan team building </li>
                        <li><input type="checkbox" disabled/> PowerPoint workshop</li>
                    </ul>
                    <Subesection title={"Knowledge"}>
                        <p>
                            It has to be made sure that everyone
                        </p>
                        <ul>
                            <li><input type="checkbox" disabled/> knows how to use Sciebo</li>
                            <li><input type="checkbox" disabled/> knows how to use Thinlinc and the CeBiTec VPN</li>
                            <li><input type="checkbox" disabled/> has the links for the CeBiTec intranet, mail and
                                Thinlinc
                            </li>
                            <li><input type="checkbox" disabled/> Knows how to use the team email</li>
                        </ul>
                    </Subesection>
                </Section>
                <Section title={"Before the lab"}>
                    <ul>
                        <li><input type="checkbox" disabled/> have the PI do the safety instructions</li>
                    </ul>
                </Section>
                <Section title={"Other"}>
                    <ul>
                        <li><input type="checkbox" disabled/> Show how the Geneious database works and can be accessed
                        </li>
                        <li><input type="checkbox" disabled/> If needed, look for people with the skills the team is
                            missing
                        </li>
                        <li><input type="checkbox" disabled/> Microphone usage workshop </li>
                    </ul>
                </Section>
            </div>
        </div>
    )
}

// <li><input type="checkbox" disabled/> </li>
