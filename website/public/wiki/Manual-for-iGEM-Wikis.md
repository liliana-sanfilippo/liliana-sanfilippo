# Further links

- [Troubleshooting](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Troubleshooting)
- [Questions and answers](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Questions-and-answers) 
- [Features](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Features)

# Background
See [README](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/blob/main/README.md) for the motivation. Also see [last years reference...problem](https://2024.igem.wiki/bielefeld-cebitec/description?scrollTo=references). So here we are. 

# Getting started and using the manager
## Install the package 

Depending on your package manager, run one of the following command in your wiki project folder: 

```bash
yarn add @liliana-sanfilippo/react-bibtex-reference-manager
```

```bash
npm install @liliana-sanfilippo/react-bibtex-reference-manager
```


## Getting your BibTeX ready

If you do not know what the BibTeX format is I recommend reading the [Wikipedia page](https://en.wikipedia.org/wiki/BibTeX) now. 

Many websites allow to export citations as BibTex and many managers such as Zotero as well. In a pinch, ChatGPT can usually reliably generate BibTeX references from other reference types. But be careful with that. 

### Tidy!

To ensure it can be properly parsed, please tidy your BibTeX first. 
The following tool tidies the BibTeX exactly as needed for the parsing: [https://liliana-sanfilippo.github.io/bibtex-tidy/index.html](https://liliana-sanfilippo.github.io/bibtex-tidy/index.html?).
There are no options unlike in the [original tool](https://flamingtempura.github.io/bibtex-tidy/index.html) to make it as non-confusing as possible. 

It ensures all values are enclosed with braces and that the abstracts are removed, because they just clutter. 
Before:
```bibtex 
@Book{sweig42,
  Author =	 { Stefa{n} Sweig },
  title =	 { The impossible book },
  publisher =	 { Dead Poet Society},
  year =	 1942,
  abstract = {Abstract},
  month =        mar
}
``` 
After: 
```bibtex 
@Book{sweig42,
	Author       = {Stefa{n} Sweig},
	title        = {The impossible book},
	publisher    = {Dead Poet Society},
	year         = {1942},
	month        = {mar}
}
``` 

## Create a file that the manager can use

While it is [possible to load the BibTeX files asynchronously from the public folder](https://github.com/liliana-sanfilippo/react-bibtex-reference-generator/wiki/Manual#importing-bibtex) we will not do that because most React Wiki pages do not even have a public folder. 
We will do it simple: 

We will declare the whole collection BibTeX references we want to use on a page as one string and give that String to the manager. 

### Create a TypeScript file

We will call our file `examplebib.ts` (as in the demo). Put it somewhere in your project. Preferably a folder where all the reference files will be. 

### Declare the variable

We will call the variable `bibts` here. Better name it after whatever section or page the references are for. 

```typescript
export const bibts = ...
```
or 
```typescript
export const bibts: string = ...
```
Both should work. 
It is crucial that it says **export** const. 

Then, we will use this specific type of quotations which also serve as accents on German keyboards:  ``` `  `  ```
Leading to a file such as this: 
```typescript
export const bibts =
    `@article{hjhhbhjb,
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
@article{chen_noninvasively_2021,
title = {Noninvasively immunogenic sonodynamic therapy with manganese protoporphyrin liposomes against triple-negative breast cancer},
volume = {269},
issn = {0142-9612},
url = {https://www.sciencedirect.com/science/article/pii/S0142961220308863},
doi = {https://doi.org/10.1016/j.biomaterials.2020.120639},
journal = {Biomaterials},
month = {Dec},
number = {2},
author = {Chen, Huaqing and Liu, Lanlan and Ma, Aiqing and Yin, Ting and Chen, Ze and Liang, Ruijing and Qiu, Yuzhi and Zheng, Mingbin and Cai, Lintao},
year = {2021},
keywords = {Deep penetration, Immunogenic cell death, Manganese protoporphyrin, Noninvasive therapy, Sonodynamic therapy},
pages = {120639},
}
`
```

Please note that there are **no** commas separating the BibteX references. 


## Using it on a page

Assuming we have a page file of the following structure: 

```typescript 
export default function Page() {
  return (
     <> SOME HTML OR JSX CODE </>
  );
};
```
### Imports 

First we need to import the necessary components:
```typescript
import {CitationlLink, CitationProvider, ManagedCitation} from "@liliana-sanfilippo/react-bibtex-reference-manager";
```
And of course the BibTeX string: 
```typescript
import {bibts} from "./examplebib";
```
(Note that the path to your `bibts` may vary depending on your project structure)


Now we have: 
```typescript 
import {CitationlLink, CitationProvider, ManagedCitation} from "@liliana-sanfilippo/react-bibtex-reference-manager";
import {bibts} from "./examplebib";

export default function Page() {
  return (
    <> SOME HTML OR JSX CODE </>
  );
};
```

### Making sure it loads the references properly 

If you do not add the following in your function, it will tell you there are no citations available. 

```typescript
const [data, setData] = useState<string[] | string>([]);
    useEffect(() => {
        setData(bibts);
    }, []);
```

This also ensures that it shows changes in your local run of the website if you add citations in the text. 

Now we have: 
```typescript 
import {CitationlLink, CitationProvider, ManagedCitation} from "@liliana-sanfilippo/react-bibtex-reference-manager";
import {bibts} from "./examplebib";

export default function Page() {

const [data, setData] = useState<string[] | string>([]);
    useEffect(() => {
        setData(bibts);
    }, []);

  return (
     <> SOME HTML OR JSX CODE </>
  );
};
```

### Adding the Citation Context

Now we put the CitationProvider-component around your **whole** HTML/JSX code of the page. The manager will only work for whatever citations are inside the CitationProvider. 
You need to give the `data` variable created in the previous step to the ContextProvider as a parameter. 

Now we have: 
```typescript 
import {CitationlLink, CitationProvider, ManagedCitation} from "@liliana-sanfilippo/react-bibtex-reference-manager";
import {bibts} from "./examplebib";

export default function Page() {

const [data, setData] = useState<string[] | string>([]);
    useEffect(() => {
        setData(bibts);
    }, []);

  return (
    <CitationProvider bibtex={data}>
      <> SOME HTML OR JSX CODE </>
    </CitationProvider>
  );
};
```

It has to be `bibtex={data}` or rather `bibtex={whateveryoucalledthevariable}`. But you cannot change the "bibtex" part, it is just called that. 


### Citing a reference in the text

We will use the `CitationlLink` (Sorry for the typo maybe I will fix that in a future package) for that. You do not need to assign numbers to your in-text citations, it does that automatically. The CitationlLink results in a superscript number that is at the same time a scroll link to the specific reference it refers to in the reference list. 

As a paramater, you need to give the link the key of the BibTeX reference you want to cite. 
The key is automatically the part that is also they key in the BibTex format. 

For the example reference it would be "sweig42":
```bibtex 
@Book{sweig42,
	Author       = {Stefa{n} Sweig},
	title        = {The impossible book},
	publisher    = {Dead Poet Society},
	year         = {1942},
	month        = {mar}
}
``` 

But the key can be as nonsensical as you want it to be. For example the key "hjhhbhjb" that one of the other example references above had. 
Then you insert it in the text at the position you want to cite as follows: 
```html
Here a link is set to a specific id<CitationlLink referenceID="hjhhbhjb"/>.
```
Or if you want to cite multiple references: 
```html
Here a link is set to a specific id<CitationlLink referenceID={["hjhhbhjb", "other_reference"]}/>.
```

Now we have something like: 
```typescript 
import {CitationlLink, CitationProvider, ManagedCitation} from "@liliana-sanfilippo/react-bibtex-reference-manager";
import {bibts} from "./examplebib";

export default function Page() {

const [data, setData] = useState<string[] | string>([]);
    useEffect(() => {
        setData(bibts);
    }, []);

  return (
    <CitationProvider bibtex={data}>
      <p> Here a link is set to a specific id<CitationlLink referenceID="hjhhbhjb"/>. </p> 
    </CitationProvider>
  );
};
```

### Inserting the reference list

This is the easiest part. 
Just add the following at the point you want the references to be (inside the ContextProvider!): 
```html
<ManagedCitation/>
``` 

Now we have something like: 
```typescript 
import {CitationlLink, CitationProvider, ManagedCitation} from "@liliana-sanfilippo/react-bibtex-reference-manager";
import {bibts} from "./examplebib";

export default function Page() {

const [data, setData] = useState<string[] | string>([]);
    useEffect(() => {
        setData(bibts);
    }, []);

  return (
    <CitationProvider bibtex={data}>
      <p> Here a link is set to a specific id<CitationlLink referenceID="hjhhbhjb"/>. </p> 
      <h2> References </h2>
      <ManagedCitation/>
    </CitationProvider>
  );
};
```

Done. It should work now. If now, please contact me. 
Well check if the provided BibTex has errors and then contact me if that is not the case

