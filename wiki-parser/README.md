# BibTeX TS Parser

![npm](https://img.shields.io/npm/v/@liliana-sanfilippo/bibtex-ts-parser) 	![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen) [![publish to github](https://github.com/liliana-sanfilippo/bibtex-ts-parser/actions/workflows/publish.yml/badge.svg)](https://github.com/liliana-sanfilippo/bibtex-ts-parser/actions/workflows/publish.yml) [![publish to npm](https://github.com/liliana-sanfilippo/bibtex-ts-parser/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/liliana-sanfilippo/bibtex-ts-parser/actions/workflows/publish-npm.yml)

BibTeX TS Parser based on the JS Parser from [bibtex js parser](https://github.com/yepengding/bibtex-js-parser). Now in TypeScript (ESNext).

[![NPM](https://nodei.co/npm/@liliana-sanfilippo/bibtex-ts-parser.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@liliana-sanfilippo/bibtex-ts-parser/)




Transforming a BibTeX file to an object in memory or a semi-structured file on disk.

## Features

- [x] Full (insensitive-case) entry types support
- [x] Browser support
- [x] NPM support
- [x] Typing support for TypeScript projects
- [x] Exportable Entry Type  for TypeScript projects
- [x] Includes inofficial type dataset 

## Quickstart

### NPM / YARN

1. Install `bibtex-ts-parser` from [npm registry](https://www.npmjs.com/package/@liliana-sanfilippo/bibtex-ts-parser).

```bash
npm install @liliana-sanfilippo/bibtex-ts-parser
```

```bash
yarn add @liliana-sanfilippo/bibtex-ts-parser
```
2. Import `BibtexParser`.

```javascript
import {BibtexParser} from "@liliana-sanfilippo/bibtex-ts-parser";
```
If necessary or wanted also import Entry type to work with. 

```javascript
import {Entry} from "@liliana-sanfilippo/bibtex-ts-parser";
```

### In-Browser Use

1. Include `bibtex-ts-parser.js` from [CDN](https://unpkg.com/@liliana-sanfilippo/bibtex-ts-parser/dist/umd/bibtex-ts-parser.js).

```html
<script src="https://unpkg.com/@liliana-sanfilippo/bibtex-ts-parser/dist/umd/bibtex-ts-parser.js"></script>
```

2. Use exposed functions.

```html
<script>
    const bibJSON = BibtexParser.parseToJSON(input);
    const bibJSONString = BibtexParser.parseToJSONString(input);
</script>
```

## Build

Environment

I used Node.js v20.19.3

### For Dev

Build a CommonJS script to `dist/dev/bibtex-ts-parser-dev.js` with source map.

```shell
npm run dev
```

Configuration is changeable in `.webpack.config.dev.js`.

### For Test

Run tests defined in `test` after building for dev.

```shell
npm run test
```

### For Production

Build a UMD script to `dist/umd/bibtex-ts-parser.js` and a CommonJS script to `dist/cjs/bibtex-ts-parser.js` and a module to to `dist/module/bibtex-ts-parser.js`.

```shell
npm run build
```

Configuration is changeable in `.webpack.config.prod.js`.

## Usage


## Related Projects

- [BibTeX JS Parser](https://github.com/yepengding/bibtex-js-parser/tree/main)
- [react-bibtex-source-generator](https://github.com/liliana-sanfilippo/react-bibtex-source-generator)
- [BibTeX Grammar](https://github.com/yepengding/BibTeX-Grammar)
- [BibTex Java Parser](https://github.com/yepengding/BibTeX-Java-Parser)
