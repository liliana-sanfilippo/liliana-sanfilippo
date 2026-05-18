interface ImportMetaEnv {
    readonly VITE_BASE_NAME: string;
    readonly VITE_BLOG_ROOT: string
    readonly VITE_TAG_ROOT: string
    readonly VITE_CURRENT_PROJECT_PATH: string
    readonly VITE_REACT_REFERENCE_MANAGER_PATH: string
    readonly VITE_REACT_REFERENCE_GENERATOR_PATH: string
    readonly VITE_REACT_BIBTEX_PARSER_PATH: string
    readonly VITE_REACT_AUTHOR_PARSER_PATH: string
    readonly VITE_PACKAGE_PATH: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;

}