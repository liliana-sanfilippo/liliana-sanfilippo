import {ComponentType} from "react";


export interface Chunk {
    previousDetails: Details
    nextDetails: Details
    title: string;
    tags: string[];
    spoiler: string;
    slug: string;
    date: Date;
    MDXComponent: ComponentType<{}>;

}


interface Details{
    title: string;
    path: string;
}