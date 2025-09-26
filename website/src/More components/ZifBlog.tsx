import { useEffect, useState } from "react"

export default function ZifBlog() {
    const [mainContent, setMainContent] = useState<string>("")



    useEffect(() => {
        fetch("/api/zif-blog")
            .then(res => res.text())
            .then(html => setMainContent(html))
            .catch(() => setMainContent("<p>Fehler beim Laden</p>"))
    }, [])

    return (
        <div className="zif-embed">
            <div dangerouslySetInnerHTML={{ __html: mainContent }} />

        </div>
    )
}
