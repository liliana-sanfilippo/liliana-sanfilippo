import React from 'react'
import ArticleMeta from './ArticleMeta'
import { Link } from 'react-router-dom'
import {Post} from "../routes/posts/post_interface";
import {Card} from "react-bootstrap";



// &copy;


function ArticleSummary({ blogRoot, post }: {blogRoot: string, post: Post}) {
    const image: string = post.image ? post.image : "https://static.igem.wiki/teams/5833/other/placeholder.svg";
  return (
    <Card className="article-summary">
        <Card.Img  variant="top" src={image} />
        <small className="px-3 pt-3 img-cc" >
        {
            post.cc && (  <> Image: {post.cc} </>)
        }
        </small>
        <Card.Body>
            <Card.Title> <Link to={`/posts/${post.slug}`}>{post.title}</Link></Card.Title>
            <Card.Text>
                <ArticleMeta blogRoot={blogRoot} data={post} />
                <p>{post.spoiler}</p>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ArticleSummary
