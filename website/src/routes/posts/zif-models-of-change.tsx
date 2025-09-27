import React, {useEffect, useState} from 'react'
import styles from './document.module.css'
import ExternalMeta from "../../More components/getUniBlog";
import UniBlog from "../../More components/getUniBlog";
import ZifBlog from "../../More components/ZifBlog";
import {LinkedInEmbed} from "react-social-media-embed";

export const  metazifModelsOfChange = {
    title: "Conference: Building Models of Change: Bridging Sciences and Humanities",
    tags: ["conference","zif"],
    spoiler: "",
    slug: "models-of-change",
    date: new Date("2025-05-16")
}

export default function zifModelsOfChange() {

    return (
        <div className="row align-items-center">
            <iframe className="m-auto"
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7308846426644463616" height="1253"
                    width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>

        </div>
    )
}
