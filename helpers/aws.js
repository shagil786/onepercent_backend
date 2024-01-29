const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'AKIA4G7SZ7VF5PH3SL63',
    secretAccessKey: '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',
    region: 'eu-north-1'
});

const s3 = new AWS.S3();

module.exports = s3;