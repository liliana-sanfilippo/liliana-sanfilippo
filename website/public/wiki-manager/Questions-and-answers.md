

## How do I add the access date? (Or other missing info)

You can add it directly into the bibtex reference. 
E.g. if this is your reference: 
```
@misc{CitekeyMisc,
  title        = "Pluto: The 'Other' Red Planet",
  author       = "{NASA}",
  howpublished = "\url{https://www.nasa.gov/nh/pluto-the-other-red-planet}",
  year         = 2015
}
```

Just add `note = {...},` (do not forget the comma, you are adding to a list): 

```
@misc{CitekeyMisc,
  title        = "Pluto: The 'Other' Red Planet",
  author       = "{NASA}",
  howpublished = "\url{https://www.nasa.gov/nh/pluto-the-other-red-planet}",
  year         = 2015,
  note         = "Accessed: 2018-12-06"
}
```

For other missing data, I will publish a list of corresponding fields [here](https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Features#what-bibtex-fields-correspond-to-which-part-of-a-citation). 

