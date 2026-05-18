# Citation order

The citations will be listed in the order they are imported in! that is the order they are in the file in.

# Importing bibtex

## Importing bibtex from the public folder

**Prequisites**

The public folder has to be defined through the `vite-config.ts`. To do this, define `publicDir. E.g. 

```typescript
export default defineConfig({
    plugins: [react()],
    publicDir: "demo-public", // setting the public folder
});
```

### Importing one file

**Using the Citation component in a React function**

Create the hook for state management. 

```typescript
const [bibtex, setTexts] = useState<string[]>([]);
```
Create the use effect. This is to ensure that the references will be loaded on mounting (usually loading or re-loading) the page. 

```typescript
useEffect(() => {
        importBibFileAsync("example.bib") // loading the file "examlple.bib" from the public folder
            .then(setTexts) // setting the bibtex sources to the contents of the file 
            .catch(console.error);
    }, []);
```
Use the loaded bibtex references for the Citation component. Here an example in the Vancouver Citation style. 

```html
<h3>References</h3>
<Citations bibtexSources={bibtex} style="vancouver"/>
```

**Minimal full example**

```typescript
import {importBibFileAsync, Citations} from "@liliana-sanfilippo/react-bibtex-reference-generator";
import {useEffect, useState} from "react";

export default function App() {
    const [bibtex, setTexts] = useState<string[]>([]);
    useEffect(() => {
        importBibFileAsync("example.bib") // loading the file "examlple.bib" from the public folder
            .then(setTexts) // setting the bibtex sources to the contents of the file 
            .catch(console.error);
    }, []);

    return (
        <div>
            <h3>References</h3>
            <Citations bibtexSources={bibtex} style="vancouver"/>
        </div>
    )
}
```

### Importing from multiple bibtex files and use the contents together

**Using the Citation component in a React function**

Create the hook for state management. 

```typescript
const [bibtex, setTexts] = useState<string[]>([]);
```
Create the use effect. This is to ensure that the references will be loaded on mounting (usually loading or re-loading) the page. 

```typescript
useEffect(() => {
        importAllBibFilesAsync(["example1.bib", "example2.bib"]) // loading the files from the public folder
            .then(setTexts) // setting the bibtex sources to the contents of the files
            .catch(console.error);
    }, []);
```
Use the loaded bibtex references for the Citation component. Here an example in the Vancouver Citation style. 

```html
<h3>References</h3>
<Citations bibtexSources={bibtex} style="vancouver"/>
```

**Minimal full example**

```typescript
import {importAllBibFilesAsync, Citations} from "@liliana-sanfilippo/react-bibtex-reference-generator";
import {useEffect, useState} from "react";

export default function App() {
    const [bibtex, setTexts] = useState<string[]>([]);
    useEffect(() => {
        importAllBibFilesAsync(["example1.bib", "example2.bib"]) // loading the files from the public folder
            .then(setTexts) // setting the bibtex sources to the contents of the files
            .catch(console.error);
    }, []);

    return (
        <div>
            <h3>References</h3>
            <Citations bibtexSources={bibtex} style="vancouver"/>
        </div>
    )
}
```

### Importing from multiple bibtex files and use the contents seperately


**Using the Citation component in a React function**

Create the hooks for state management. 

```typescript
const [bibtexA, setTextsA] = useState<string[]>([]);
const [bibtexB, setTextsB] = useState<string[]>([]);
```
Create the use effect. This is to ensure that the references will be loaded on mounting (usually loading or re-loading) the page. 

```typescript
useEffect(() => {
        importBibFileAsync("exampleA.bib") 
            .then(setTextsA) 
            .catch(console.error);

        importBibFileAsync("exampleB.bib") 
            .then(setTextsB)
            .catch(console.error);
    }, []);
```
Use the loaded bibtex references for the Citation components. Here an example in the Vancouver Citation style. 

```html
<h3>References</h3>
<Citations bibtexSources={bibtexA} style="vancouver"/>

<h3>Other References</h3>
<Citations bibtexSources={bibtexB} style="vancouver"/>
```

If you want to use multiple citation sections on you page and have them all start from 1, you should add a "special" id prefix to the further Citation instance to make sure the ScrollLink work correctly later on. 

```html
<h3>References</h3>
<Citations bibtexSources={bibtexA} style="vancouver"/>

<h3>Other References</h3>
<Citations bibtexSources={bibtexB} style="vancouver" special="add-cit"/>
```

If you want the citations to be continuous, that is not necessary. But you need to make sure you enter the correct start number in the second Citation instance. 

```html
<h3>References</h3>
<Citations bibtexSources={bibtexA} style="vancouver"/>

<h3>Other References</h3>
<Citations bibtexSources={bibtexB} style="vancouver" start="6"/>
```

**Minimal full example**

```typescript
import {importBibFileAsync, Citations} from "@liliana-sanfilippo/react-bibtex-reference-generator";
import {useEffect, useState} from "react";

export default function App() {
    const [bibtexA, setTextsA] = useState<string[]>([]);
    const [bibtexB, setTextsB] = useState<string[]>([]);
    useEffect(() => {
        importBibFileAsync("exampleA.bib") 
            .then(setTextsA) 
            .catch(console.error);

        importBibFileAsync("exampleB.bib") 
            .then(setTextsB)
            .catch(console.error);
    }, []);

    return (
        <div>
           <h3>References</h3>
           <Citations bibtexSources={bibtexA} style="vancouver"/>

           <h3>Other References</h3>
           <Citations bibtexSources={bibtexB} style="vancouver" start={6}/>
        </div>
    )
}
```

## Importing bibtex from a src folder

In this example the folder structure is that the bib and the app / page are in the same folder. If you have a different structure you need to adjust the paths, of course. 

We have an example file `examplebib.ts`with bibtex: 

```typescript
export const bibts =
    `@article{koirala_conserved_2019,
title = {A conserved {RNA} structural motif for organizing topology within picornaviral internal ribosome entry sites},
volume = {10},
url = {https://www.nature.com/articles/s41467-019-11585-z},
doi = {10.1038/s41467-019-11585-z},
number = {1},
journal = {Nature Communications},
author = {Koirala, Deepak and Shao, Yaming and Koldobskaya, Yelena and Fuller, James R. and Watkins, Andrew M. and Shelke, Sandip A. and Pilipenko, Evgeny V. and Das,Rhiju and Rice, Phoebe A. and Piccirilli, Joseph A.},
month = {aug},
year = {2019},
pages = {3629},
}
`
```

Import the ts file with your bibtex into your app:

```typescript
import {bibts} from "./examplebib";
```

use with Citation component (be mindful of the additional square brackets!):

```typescript
 <Citations bibtexSources={[bibts]} style="vancouver"/>
```


# Using citation styles

Info: Currently only AMA is available for every bib type. 

TODO




