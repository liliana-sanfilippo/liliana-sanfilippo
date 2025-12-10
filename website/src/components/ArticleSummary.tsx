import React from 'react'
import ArticleMeta from './ArticleMeta'
import {Link} from 'react-router-dom'
import {Post} from "../routes/posts/post_interface";
import {Card} from "react-bootstrap";


function ArticleSummary({blogRoot, post, noimg, spoiler}: {
    blogRoot: string, post: Post, noimg?: boolean, spoiler?: boolean
}) {
    const image: string = post.image ? post.image : "https://static.igem.wiki/teams/5833/other/placeholder.svg";
    return (<div className={`card mb-3 article-summary`}>
        <div className="row no-gutters">
            <div className="col-md-6">
                {!noimg ? <><Card.Img variant="top" src={image}/></> : <></>}
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <Card.Title> <Link to={`/posts/${post.slug}`}>{post.title}</Link></Card.Title>
                    <ArticleMeta blogRoot={blogRoot} data={post}/>
                    {spoiler && <p>{post.spoiler}</p>}
                </div>
            </div>
        </div>

        {post.cc && (<small className="px-3 pt-3 img-cc"> Image: {post.cc} </small>)}

    </div>)
}


export function ArticleCard({blogRoot, post, noimg, spoiler}: {
    blogRoot: string, post: Post, noimg?: boolean, spoiler?: boolean
}) {
    const image: string = post.image ? post.image : "https://static.igem.wiki/teams/5833/other/placeholder.svg";
    return (<Card className="article-summary">
        {!noimg ? <><Card.Img variant="indi" src={image}/>
            <small className="px-3 pt-3">
                {post.cc && (<> Image: {post.cc} </>)}
            </small></> : <></>}
        <Card.Body>
            <Card.Title> <Link to={`/posts/${post.slug}`}>{post.title}</Link></Card.Title>
            <Card.Text>
                <ArticleMeta blogRoot={blogRoot} data={post}/>
                <p>{post.spoiler}</p>
            </Card.Text>
        </Card.Body>
    </Card>)
}

export default ArticleSummary
