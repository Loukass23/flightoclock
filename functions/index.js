const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const mkdirp = require('mkdirp-promise');
// Include a Service Account Key to use a Signed URL
const gcs = require('@google-cloud/storage')({ keyFilename: 'service-account-credentials.json' });

const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');

// Max height and width of the thumbnail in pixels.
const THUMB_MAX_HEIGHT = 200;
const THUMB_MAX_WIDTH = 200;
// Thumbnail prefix added to file names.
const THUMB_PREFIX = 'thumb_';


exports.generateThumbnail = functions.storage.object().onFinalize((object) => {
    console.log(object)
    // Download file from bucket.
    const bucket = gcs.bucket(object.bucket);

    const filePath = object.name
    const tempFilePath = `/tmp/${filePath}`;
    const metadata = object.metadata
    const tempLocalFile = path.join(os.tmpdir(), filePath);
    const tempLocalDir = path.dirname(tempLocalFile);

    // if (metadata.isThumb) {
    //     console.log('Exiting: Already a thumbnail')
    //     return null
    // }
    if (object.size <= 1000000) {
        console.log('Size already inferior to 1Mb')
        return null;
    }



    return mkdirp(tempLocalDir).then(() => {
        // Download file from bucket.
        return bucket.file(filePath).download({ destination: tempFilePath });
    }).then(() => {
        console.log('Image downloaded locally to', tempFilePath);
        // Generate a thumbnail using ImageMagick.
        return spawn('convert', [tempFilePath, '-thumbnail', '700x700>', tempFilePath])
            .then(_ => {
                metadata.isThumb = true               // We add custom metadata
                const options = {
                    destination: filePath,            // Destination is the same as original
                    metadata: { metadata: metadata }
                }
                // Overwrite the original path
                return bucket.upload(tempFilePath, options)
            })
    });

})