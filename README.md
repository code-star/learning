# Codestar Learning

## Goal

We'd like to provide **a curated list of learning resources to learn about any topic**.

Curated means that you must have read/watched/studied a resource before adding it. Please provide a review detailing why you liked a resource and for who it will be suitable. For example:

> ## FP Simplified by Alvin Alexander
> As the book title, FP Simplified explains the FP concepts and its buzzwords in plain English. Pick this first before touching the Red Book.
> 
> Read by:
> * Tammy (recommended)

## Folder structure 

Folder structure like:

```
Backend/Functional Programming.md
Backend/Functional Programming/Monad.md
```

General knowledge about Functional Programming can be added to `Backend/Functional Programming.md` while more specific subjecs can be addressed in `Backend/Functional Programming/Monad.md`.

## Schedule intake

Martin
---
Abishek
Bart*
Bjorn
Cuno
Martin
Mikel*

Donovan
---
Daniel
Eelco
Hamza
Hassan
Hernan
Jan

Werner
---
Jean-Marc
Lone
Nathan
Rene
Roberto
Tammy


# Installation of module

- Install Deno
- Install Velociraptor: `deno install -qA -n vr https://deno.land/x/velociraptor@1.0.0-beta.18/cli.ts`
- Install Pagic: `deno install --unstable --allow-read --allow-write --allow-net --allow-run --name=pagic https://deno.land/x/pagic/mod.ts`
- `vr build`
- to run locally, remove `root: "/learning/",` from pagic.config.ts
