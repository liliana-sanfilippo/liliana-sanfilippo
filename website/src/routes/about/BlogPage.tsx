import styles from './document.module.css'
import React from "react";
import {BlogSidebar} from "../../More components/BlogSidebar";

export function BlogPage() {
    return(<div className={styles.Document}>



        <div className="row">
            <div className="col-9">
                # About Me

                I made a blog!
            </div>

            <div className="col-3">
                <BlogSidebar></BlogSidebar>
            </div>
        </div>

    </div>)
}