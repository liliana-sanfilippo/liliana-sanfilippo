import React from 'react'
import {Link} from 'react-router-dom'
import {Post} from "../routes/posts/post_interface";
import {Card} from "react-bootstrap";
import {formatDate} from "../utils/formats";


function ArticleCard({post, noimg, h}: {
  post: Post, noimg?: boolean, h? :string
}) {
    const image: string = post.image ? post.image : "https://static.igem.wiki/teams/5833/other/placeholder.svg";
    const height = h? `h-${h}` : "h-100"
    return (
        <Card className={`mb-3 mx-auto ${height}`} style={{minWidth: '32rem'}}>
            <Card.Header>
                <time dateTime={post.date.toUTCString()}>{formatDate(post.date)}</time>
            </Card.Header>
            {!noimg ? <><Card.Img className={"p-0"} variant="top" src={image}/></> : <></>}
            <Card.Body>
                  {post.cc && (<p className={"my-0"}><small className="img-cc"> Image: {post.cc} </small></p>)}
                  <p className={"my-1"}> <Link to={`/posts/${post.slug}`}>{post.title}</Link> </p>
                  {post.spoiler && <p>{post.spoiler}</p>}
            </Card.Body>
        </Card>
    )
}
export default ArticleCard;