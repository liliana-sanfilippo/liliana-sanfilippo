import React, {useEffect, useState} from 'react'
import styles from './document.module.css'
import ExternalMeta from "../../More components/getUniBlog";
import UniBlog from "../../More components/getUniBlog";
import ZifBlog from "../../More components/ZifBlog";
import {LinkedInEmbed} from "react-social-media-embed";

export const  metawiardaBlogAidare = {
    title: "External Blog: Open Models statt OpenAI - Wiarda Blog",
    tags: ["aidare", "ai"],
    spoiler: "",
    slug: "aidare-wiarda",
    date: new Date("2025-09-23")
}

export default function wiardaBlogAidare() {


    return (
        <div className="row align-items-center">
            <iframe className="m-auto" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7376158271956750336" height="1253"
                    width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>

        </div>
    )
}
