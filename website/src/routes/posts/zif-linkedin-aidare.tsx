import React, {useEffect, useState} from 'react'
import styles from './document.module.css'
import ExternalMeta from "../../More components/getUniBlog";
import UniBlog from "../../More components/getUniBlog";
import ZifBlog from "../../More components/ZifBlog";
import {LinkedInEmbed} from "react-social-media-embed";

export const  metazifBLinkedInAidare = {
    title: "External Blog: Artificial Intelligence and Digital Autonomy in Research and Education",
    tags: ["aidare", "ai", "zif"],
    spoiler: "",
    slug: "aidare-zif-post",
    date: new Date("2025-09-25")
}

export default function zifLinkedinAidare() {


    return (
        <div className="row align-items-center">
            <iframe className="m-auto" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376995546764419072" height="1253"
                    width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>

        </div>
    )
}
