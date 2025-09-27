import React, {useEffect, useState} from 'react'
import styles from './document.module.css'
import ExternalMeta from "../../More components/getUniBlog";
import UniBlog from "../../More components/getUniBlog";
import ZifBlog from "../../More components/ZifBlog";
import {LinkedInEmbed} from "react-social-media-embed";
import {FurtherLinks} from "../../More components/FurtherLinks";

export const  metazifModelsOfChange = {
    title: "Conference: Building Models of Change: Bridging Sciences and Humanities",
    tags: ["conference","zif"],
    spoiler: "",
    slug: "models-of-change",
    date: new Date("2025-05-16"),
    image: "https://media.licdn.com/dms/image/v2/D4E22AQELGzrhKsAVLg/feedshare-shrink_2048_1536/B4EZW49E1ZHMAs-/0/1742564778582?e=1761782400&v=beta&t=L0D5VFwCQrXvERzk3B0wjgJP6-WuI1Fpz-FIVGyYE4M"
}



const flinks = [
    {
        text: "University page of the conference",
        url: "https://www.uni-bielefeld.de/themen/conference-march-2025/"
    },
    {
        text: "Recap",
        url: "https://www.uni-bielefeld.de/themen/conference-march-2025/recap/"
    }
]

export default function zifModelsOfChange() {

    return (
        <div className="row align-items-center">

            <div className="row align-items-center">
                <iframe
                    className="col-6 m-auto"
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7308846426644463616"
                    height="670"
                    width="50%"
                    frameBorder="0"
                />
            </div>

            <FurtherLinks flinks={flinks}/>
        </div>
    )
}
