const ExifImage = require('exif').ExifImage;
const traverse = require('traverse');

module.exports = function(files, cb = () => {}) {
    const exif = {};
    const errors = [];

    files.forEach((file, index) => {
        try {
            new ExifImage({
                image: file
            }, function(error, data) {
                if (error) {
                    errors.push(error);
                }

                exif[file] = data;

                if (index === files.length - 1) {
                    cb(errors, traverse(exif));
                }
            });
        } catch (e) {
            errors.push(e);

            if (index === files.length - 1) {
                cb(errors, traverse(exif));
            }
        }
    });
};

