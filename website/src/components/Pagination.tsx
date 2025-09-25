
import React from 'react'

import { Link } from 'react-router-dom'
import styles from './Pagination.module.css'

interface PaginationProps {
  blogRoot: string
  pageCount: number
  pageNumber: number
}

function Pagination({ blogRoot, pageCount, pageNumber }: PaginationProps) {

    const joinUrl = (...parts: (string | number)[]) => {
        return parts
            .map(part => String(part).replace(/^\/|\/$/g, '')) // führende/abschließende / entfernen
            .filter(Boolean)
            .join('/')
            .replace(/\/\/+/g, '/') // doppelte / vermeiden
            .replace(/^$/, '/');
    }
    return (
    <small className={styles.Pagination}>
      {pageNumber !== 1 && (
        <Link
          className={styles.previous}
          to={`/${joinUrl(blogRoot, 'page', pageNumber - 1)}`}>
          ← Previous
        </Link>
      )}
      <span className={styles.pages}>
        {' '}
        Page <span className={styles.current}>{pageNumber}</span>/
        <span className={styles.count}>{pageCount}</span>{' '}
      </span>
      {pageNumber < pageCount && (
        <Link
          className={styles.next}
          to={`/${joinUrl(blogRoot, 'page', pageNumber + 1)}`}>
          Next →
        </Link>
      )}
    </small>
  )
}

export default Pagination
