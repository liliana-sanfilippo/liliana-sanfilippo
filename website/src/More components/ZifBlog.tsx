import { useEffect, useState } from "react";

export default function ZifBlog() {
    const [mainContent, setMainContent] = useState<string>("");


    return (
        <div className="zif-embed">
            <div dangerouslySetInnerHTML={{ __html: mainContent }} />
        </div>
    );
}
