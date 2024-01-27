# import-order

I wanted to test out publishing to npm for a while. I also have an urge to reorder
imports in a file to be prettier. Well I believe there is already an eslint rule or
prettier setting for this, but thought it will be good for practice. So this is it.
If you call this on a file it will order your imports like this:

1. Global imports by line length
2. Local imports by line length
3. Global requires by line length
4. Local requires by line length

To install:

```bash
npm install -g import-order
```

To run:

```bash
import-order <path-to-file>/file.ts
```

There is no real plan to keep this project up to date.
