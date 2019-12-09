# font-list

`font-list` is a Node.js package for listing the fonts available on your system.

Current version supports **MacOS**, **Windows**, and **Unix** (**Linux**, **FreeBSD**, **NetBSD**, **OpenBSD**...).

## Install

```bash
npm install font-list
```

## Usage

```js
const fontList = require('font-list')

fontList.getFonts()
  .then(fonts => {
    console.log(fonts)
  })
  .catch(err => {
    console.log(err)
  })
```

The return value `fonts` is an Array, looks like:

```
[ 'Adobe Arabic',
  'Adobe Caslon Pro',
  'Adobe Devanagari',
  'Adobe Fan Heiti Std',
  'Adobe Fangsong Std',
  'Arial',
  ...
  ]
```

If the font name is wrapped in `""` the wrapping `""` will be removed.
