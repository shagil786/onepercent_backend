const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "Access Key",
  secretAccessKey: "Secreat Key",
  region: "eu-north-1",
});

const s3 = new AWS.S3();

module.exports = s3;
