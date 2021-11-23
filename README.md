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

We use GitHub Actions, which will automatically build the site when you push to a branch, and will automatically build/deploy when a PR is merged with main. If you need to do a manual deploy you can using the instructions below.

### Prerequistes

To do this you must:

- Have s3 and cloudfront permission for the emergentworks.org s3 bucket and the E3NHW48S3W8DOR cloudfront distribution.
- Install the aws cli https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
  - If you have a homebrew you can alternatley use 'brew install awscli'
- Get your AWS public key and secret access key, and set them up as explained here: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
  - To do this you may need to request those keys by emailing "devops@emergentworks.org"
  - Make sure to also set the config file in the .aws file, our region is 'us-west-1'

### Deploying Locally

We have a bash script to deploy the app, you can run it with 'npm run deploy'

Note, this will update the files in the s3 bucket, but will not invalidate the cache. After running the
deploy command run 'npm run update' to invalidate the cache and complete the update.

Also note: while the old version is deleted and the new images are not yet uploaded the website will use down-rezed cached versions (or none at all) of the images. This is a bug potentially work exploring and fixing.
