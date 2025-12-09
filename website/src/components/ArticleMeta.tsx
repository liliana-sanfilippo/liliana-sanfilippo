
import React from 'react'
import { formatDate } from '../utils/formats'
import { Link } from 'react-router-dom'

interface ArticleMetaProps {
  blogRoot: string
  data: any
  readingTime?: any
}

function ArticleMeta({ blogRoot, data, readingTime }: ArticleMetaProps) {
  let readingTimeElement
  if (readingTime) {
    let minutes = Math.max(Math.round(readingTime.minutes), 1)
    readingTimeElement = (
      <React.Fragment>
        {' '}
        &bull;{' '}
      </React.Fragment>
    )
  }

  return (
    <small>
      <time dateTime={data.date.toUTCString()}>{formatDate(data.date)}</time>
      {data.tags && data.tags.length && (
        <>
          {' '}
          &bull;{' '}
          <ul className={"tags"}>
            {data.tags.map((tag: string) => (
              <li key={tag}>
                <Link to={`${blogRoot.replace(/\/$/, '')}/tags/${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {readingTimeElement || null}
    </small>
  )
}

export default ArticleMeta
