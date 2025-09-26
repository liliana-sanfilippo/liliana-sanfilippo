export type SidebarContents = { header: string; subheaders?: string[] };

export interface Base {
    name: string | undefined;
}

export class Folder implements Base {
    name: string | undefined;
    folder: Page[] | PageRef[] | undefined;
}

export class Page implements Base {
    name: string | undefined;
    title: string | undefined;
    path: string | undefined;
    component!: React.FC;
    header?: React.FC;
}

export class PageRef implements Base{
    name: string | undefined;
    title: string | undefined;
    path: string | undefined;
    component?: React.FC;
    header?: React.FC;
}
