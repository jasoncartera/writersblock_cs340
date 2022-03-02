'use strict'

import 'dotenv/config';
import S3 from 'aws-sdk/clients/s3.js';
import fs from 'fs';

/* Citation: https://javascript.plainenglish.io/file-upload-to-amazon-s3-using-node-js-42757c6a39e9
   Date: 3/1/2022
*/
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretKey,
});

// Upload file to S3

function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename,
    };

    // This will upload the file to S3
    return s3.upload(uploadParams).promise();
}

export {uploadFile};