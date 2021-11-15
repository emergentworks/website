# Emergent Works website

## Getting Started

setup RSA key for your github account (example found here: https://jhooq.com/github-permission-denied-publickey/#1-github---how-to-fix-this-issue)

```shell
   git clone git@github.com:emergentworks/website.git
   cd emergentworks/website/
   npm install
   npm run build
```

To setup development environment:
`npm run develop`

## Deploying the App

### Prerequistes

To do this you must:

- Have s3 and cloudfront permission for the emergentworks.org s3 bucket and the E3NHW48S3W8DOR cloudfront distribution.
- Install the aws cli https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
  - If you have a homebrew you can alternatley use 'brew install awscli'
- Get your AWS public key and secret access key, and set them up as explained here: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
  - To do this you may need to request those keys from an AWS admin

### Deploying

We have a bash script to deploy the app, you can run it with 'npm run deploy'

Note, this will update the files in the s3 bucket, but will not invalidate the cache. After running the
deploy command run 'npm run update' to invalidate the cache and complete the update.
