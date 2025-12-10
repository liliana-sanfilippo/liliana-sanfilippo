import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function WikiPage() {
    const { pageName = 'Home' } = useParams<{ pageName: string }>();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`/wiki/${pageName}.md`)
            .then(res => {
                if (!res.ok) throw new Error('Wiki page not found');
                return res.text();
            })
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [pageName]);

    if (loading) return <div className="container py-4">Loading...</div>;
    if (error) return <div className="container py-4">Error: {error}</div>;

    return (
        <div className="container py-4">
            <div className="prose max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        // Transformiere [[Wiki Links]] zu React Router Links
                        a: ({node, href, children, ...props}) => {
                            // Prüfe ob es ein interner Link ist
                            if (href?.startsWith('/wiki/') || !href?.includes('://')) {
                                const wikiPath = href?.replace(/\.md$/, '') || '';
                                return <Link to={`/wiki${wikiPath}`}>{children}</Link>;
                            }
                            // Externe Links normal
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

// Transformiere [[Page]] zu [Page](/wiki/Page)
function transformWikiLinks(markdown: string): string {
    return markdown
        // [[Page|Display Text]] → [Display Text](/wiki/Page)
        .replace(/\[\[([^\|\]]+)\|([^\]]+)\]\]/g, '[$2](/wiki/$1)')
        // [[Page]] → [Page](/wiki/Page)
        .replace(/\[\[([^\]]+)\]\]/g, '[$1](/wiki/$1)');
}