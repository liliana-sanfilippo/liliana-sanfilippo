
# Troubleshooting
Now the fun part. 
Also, I am collecting [questions and answers btw.](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Questions-and-answers) 

## Big fat red "NO [Something]" - Remember the "visual error feedback"? 

Currently, the only citation style available is AMA and that needs specific information for each type of entry. 

If your reference does not have a "year" field for example this happens: 

<img width="902" height="142" alt="image" src="https://github.com/user-attachments/assets/2b0508d3-6894-444c-a56c-bcdc5af0b3dc" />

More on [how to add the missing data](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Questions-and-answers#how-do-i-add-the-access-date-or-other-missing-info). 
More on [Which field corresponds to which part of the reference](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Features#what-bibtex-fields-correspond-to-which-part-of-a-citation). 


## A weird and ugly popup containing some kind of BibTeX code

<img width="964" height="1016" alt="image" src="https://github.com/user-attachments/assets/18c70963-9c52-4a65-8f21-b451eedce91f" />

Your BibTeX is not proper. Maybe missing braces or the key? 

## Non numeric page warning in the console

<img width="476" height="38" alt="image" src="https://github.com/user-attachments/assets/42fe0069-661c-4a9a-8857-ab3385056376" />

Just ignore it. It is there to alert you that the page field **could** be wrong because it contains letters. But online journals sometimes have "page numbers" with letters. 


## No Citations available 

Assuming you do have references, please check: 

* Are the Citation Links and the ManagedReferences Component both in the same CitationProvider?
* Is there a typo in the reference id? E.g. did you write `referenceID="my source"`even though in the BibteX the key is `my_source`? 
* Check the console for errors or warnings 

Or directly activate the [maintenance mode](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Features#maintenance-mode). 

If the bibtex results in a parse error, try the [BibTeX Tidier](https://liliana-sanfilippo.github.io/bibtex-tidy/index.html).


