import React, {useEffect, useState} from 'react'
import styles from './document.module.css'
import ExternalMeta from "../../More components/getUniBlog";
import UniBlog from "../../More components/getUniBlog";
import ZifBlog from "../../More components/ZifBlog";

export const  metazifBlogAidare = {
    title: "Artificial Intelligence and Digital Autonomy in Research and Education",
    tags: ["aidare", "ai", "zif"],
    spoiler: "",
    slug: "aidare-workshop-zif-blog",
    date: new Date("2025-09-22")
}

export default function zifBlogAidare() {


    return (
        <div className={styles.Welcome}>
         <ZifBlog></ZifBlog>
        </div>
    )
}
