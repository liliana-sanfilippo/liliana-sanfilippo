export interface Post {
    title: string
    tags: string[]
    spoiler: string
    slug: string
    date: Date
    getContent: () => Promise<any>
    previousDetails?: { title: string; path: string }
    nextDetails?: { title: string; path: string },
    MDXComponent: React.ComponentType
}

export interface LoadedPost extends Post {
    MDXComponent: React.ComponentType
}

