import React from 'react'
import {Link} from 'react-router-dom'
import {Col, Row} from "react-bootstrap";

interface Tag {
    count: number
    href: string
    name: string
}

interface TagIndexPage {
    tags: Tag[]
}

function TagIndex({tags}: TagIndexPage) {
    const middleIndex = Math.ceil(tags.length / 2);
    const firstHalf = tags.slice(0, middleIndex);
    const secondHalf = tags.slice(middleIndex);
    return (<Row>
        <Col>
            <ul>
                {firstHalf.map(tag => (<li key={tag.href}>
                    <Link to={tag.href}>
                        {tag.name} ({tag.count})
                    </Link>
                </li>))}
            </ul>
        </Col>
        <Col>
            <ul>
                {secondHalf.map(tag => (<li key={tag.href}>
                    <Link to={tag.href}>
                        {tag.name} ({tag.count})
                    </Link>
                </li>))}
            </ul>
        </Col>
    </Row>)
}

export default TagIndex
