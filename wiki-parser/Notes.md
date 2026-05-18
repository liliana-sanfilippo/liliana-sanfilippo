# Adding new bibtex types

### Add type to BibTeX Lexer (`Extended-BibTeX-Grammar/BibTeXLexer.g4`).

```antlr
ARTICLE: '@article';
```

### Add type to BibTeX Parser Grammar (`Extended-BibTeX-Grammar/BibTeXParser.g4`).

The entry type list: 

```antlr
entry
    : article
;
```
And create the parsing rule: 

```antlr
article
    : ARTICLE LBRACE IDENTIFIER COMMA field (COMMA field)* (COMMA)? RBRACE
    ;
```

### Create Parser 

Go into `/bibtex-ts-parser/Extended-BibTeX-Grammar`.

Create Lexer Tokens. 

```bash
bibtex-ts-parser/Extended-BibTeX-Grammar$ npx antlr4ts -visitor BibTeXLexer.g4
```

Create Parser, Listener and Visitor.

```bash
bibtex-ts-parser/Extended-BibTeX-Grammar$ npx antlr4ts -visitor BibTeXParser.g4
```

Move the created files into `src/base`.

### Add type TS Types

Add type to `EntryTypeEnum` in `src/core/type.ts`.

```typescript
export enum EntryTypeEnum {
    ARTICLE = "article",
}
```

### Add type to visitor

Add to `Visitor` in `src/core/visitor.ts` by adding to function `getEntryType`.

```typescript
getEntryType(ctx: EntryContext): FullEntry {
        if (ctx.article()) return this.visitArticle(ctx.article()!);
}
```

Add visitor Method

```typescript
visitArticle(ctx: ArticleContext) {
        const idNode = ctx.IDENTIFIER();
        return this.newEntry(EntryTypeEnum.ARTICLE, ctx, idNode);
    }
```


# Adding new BibTeX fields

### Add field to `Entry` in `src/core/type.ts` and `src/index.ts`.

```typescript
export interface Entry {
        id: string,
}
```

### Add field to `setters` in `src/bibtex_generator.ts`.

```typescript
const setters: { [K in keyof Entry]?: (e: Entry, v: string) => void } = {
    title:     (e,v) => { e.title = v; }
}
```









