# EXIF search

Search EXIF fields from images

*Note:* Requires Node 6+


## Usage

CLI:

```shell
./bin/exif <glob> [--only field[, ...]]
```

API:

```javascript
const search = require('exif-search');

search(['./images/photo.jpg'], (tree) => {
  // Traverse tree
});
```

See [bin/exif](bin/exif) for tree usage

