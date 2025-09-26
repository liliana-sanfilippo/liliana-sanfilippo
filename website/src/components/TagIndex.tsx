import React from 'react'
import { Link} from 'react-router-dom'
import styles from './TagIndexPage.module.css'

interface Tag {
  count: number
  href: string
  name: string
}

interface TagIndexPage {
  tags: Tag[]
}

function TagIndex({ tags }: TagIndexPage) {
  return (
    <div className={styles.TagIndexPage}>
      <ul>
        {tags.map(tag => (
          <li key={tag.href}>
            <Link to={tag.href}>
              {tag.name} ({tag.count})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagIndex
