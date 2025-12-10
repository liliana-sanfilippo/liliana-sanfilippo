import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import "../../componentStyling/wikipage.css"
import rehypeRaw from "rehype-raw";

export function WikiPage() {
    const {pageName = 'Home'} = useParams<{ pageName: string }>();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        setLoading(true);
        setError(null);

        // Hardcoded base path
        const wikiPath = `/liliana-sanfilippo/wiki/${pageName}.md`;

        console.log('Fetching wiki page:', wikiPath);

        fetch(wikiPath)
            .then(res => {
                console.log('Response status:', res.status);
                if (!res.ok) throw new Error(`Wiki page not found (${res.status})`);
                return res.text();
            })
            .then(text => {
                console.log('Wiki content loaded, length:', text.length);
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading wiki:', err);
                setError(err.message);
                setLoading(false);
            });
    }, [pageName]);

    if (loading) return (
        <div className="container py-4">
            <div>Loading wiki page: {pageName}...</div>
            <div className="text-sm text-gray-500">
                Looking for: wiki/{pageName}.md
            </div>
        </div>
    );

    if (error) return (
        <div className="container py-4">
            <div className="text-red-600">Error: {error}</div>
            <div className="text-sm text-gray-500 mt-2">
                Tried to load: wiki/{pageName}.md
            </div>
            <div className="mt-4">
                <Link to="/wiki" className="text-blue-600">← Back to Wiki Index</Link>
            </div>
        </div>
    );

    return (
        <div className="container py-4">
            <div className="prose max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        a: ({node, href, children, ...props}) => {
                            if (href?.startsWith('/react-reference-manager/') ||
                                (!href?.includes('://') && href?.startsWith('/'))) {
                                const path = href?.replace(/\.md$/, '') || '';
                                return <Link to={path}>{children}</Link>;
                            }
                            return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                        }
                    }}
                >
                    {transformWikiLinks(content)}
                </ReactMarkdown>
            </div>
        </div>
    );
}

function transformWikiLinks(markdown: string): string {
    return markdown
        // [[Page|Display Text]] → [Display Text](/react-reference-manager/Page)
        .replace(/\[\[([^\|\]]+)\|([^\]]+)\]\]/g, '[$2](/react-reference-manager/$1)')
        // [[Page]] → [Page](/react-reference-manager/Page)
        .replace(/\[\[([^\]]+)\]\]/g, '[$1](/react-reference-manager/$1)')
        // GitHub Wiki URLs → interne Links
        .replace(
            /\[([^\]]+)\]\(https?:\/\/github\.com\/liliana-sanfilippo\/react-bibtex-reference-manager\/wiki\/([^\)]+)\)/g,
            '[$1](/react-reference-manager/$2)'
        );
}