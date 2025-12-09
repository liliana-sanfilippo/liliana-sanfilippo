import React from 'react'
import siteMetadata from '../siteMetadata'
import { Link } from 'react-router-dom'
import {Post} from "../routes/posts/post_interface";



interface BlogIndexPageProps {
  blogRoot: string
  postRoutes: Post[]
}


function BlogIndexPage({
  blogRoot,
}: BlogIndexPageProps) {
  return (
    <div>
      <header>
        <h1 className={"blogindex-title"}>
          <Link to={blogRoot}>{siteMetadata.title}</Link>
        </h1>

      </header>
    </div>
  )
}

export default BlogIndexPage
