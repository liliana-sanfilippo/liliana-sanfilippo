
# Features

## Supported Entry types 

See visually what BibTeX types are supported: [https://liliana-sanfilippo.github.io/react-bibtex-reference-generator/](https://liliana-sanfilippo.github.io/react-bibtex-reference-generator/) 

Here is a list of what types you can currently use: 
| Entry Type      | 
|-----------------|
| article         |
| book            |
| booklet         |
| inbook          |
| incollection    |
| inproceedings   |
| proceedings     |
| manual          |
| mastersthesis   |
| phdthesis       |
| misc            |
| techreport      |
| unpublished     |
| dataset         |
| online          |
| software        |
| genai           |
| transcript      |
| video           |
| audio           |
| patent          |

 Most of them result in different ways the references are structures (see visual demo). 


## Reference styles

Currently just AMA, sorry

## In-text citation styles

Currently just superscript numbers

Please open issues to request features or contact me. 

## What bibtex fields correspond to which part of a citation

Currently working on the list

## Maintenance mode

The maintenance mode allows a user to switch into a mode where extra feedback is displayed above the reference list. This is useful for local runs and allows a fast check to see if everything is in order. 

You can use it as follows: 
```typescript
<CitationProvider bibtex={data} maintenanceMode>
   ...    
</CitationProvider>
```
or

```typescript
<CitationProvider bibtex={data} maintenanceMode={true}>
   ...    
</CitationProvider>
```

If you delete the `maintenanceMode`-parameter, it is deactivated. 

There are **3 possible feedbacks**:

### Everything is in order:

<img width="910" height="263" alt="image" src="https://github.com/user-attachments/assets/825b6858-3733-413d-8dfc-2409f3cbaf3e" />

### Not all references are cited or not all id used on the CitationLinks belong to bibtex references supplied to the CitationManager:

<img width="910" height="339" alt="image" src="https://github.com/user-attachments/assets/d4ee21e7-3a2a-4595-bba7-2a52841fe71a" />

### Errors with the bibtex: 

<img width="911" height="180" alt="image" src="https://github.com/user-attachments/assets/839d4561-44f0-4fb3-80ab-a0b0f3c29859" />

<img width="911" height="180" alt="image" src="https://github.com/user-attachments/assets/5684ef52-471a-449f-b112-08a22be3d13c" />


## Citation Link

The link takes one ID as a string or multiple IDs as a list of strings. Citations will be separated by commata. 

```typescript
<CitationLink referenceID="the_id" />
```

```typescript
<CitationLink referenceID={"the_id"} />
```

```typescript
<CitationLink referenceID={["the_id", "other_id"]} />
```

