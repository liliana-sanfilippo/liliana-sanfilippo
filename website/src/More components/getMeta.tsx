import { useEffect, useState } from "react"

export default function ExternalMain({ url }: { url: string }) {
    const [mainContent, setMainContent] = useState<string>("")
    const [headerContent, setHeaderContent] = useState<string>("")
    const [entryContent, setEntryContent] = useState<string>("")

    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(html, "text/html")
                const main = doc.querySelector("main")
                if (main) {
                    setMainContent(main.innerHTML)
                    const header = main.querySelector("header")
                    if (header) {
                        setHeaderContent(header.innerHTML)
                    }
                    const entry = main.querySelector(".entry-content")
                    if(entry) {
                        setEntryContent(entry.innerHTML)
                    }
                } else {
                    setMainContent("<p>Kein <main> gefunden.</p>")
                }
            })
            .catch(() => setMainContent("<p>Fehler beim Laden der externen Seite.</p>"))
    }, [url])

    return (
    <div className="uni-embed">
        <div dangerouslySetInnerHTML={{ __html: headerContent }} />
        <div dangerouslySetInnerHTML={{ __html: entryContent }} />

    </div>
    )
}
