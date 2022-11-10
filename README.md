# Emergent Works website

## Getting Started

To run this project you'll need

- A working github connection
  - setup RSA key for your github account (example found here: https://jhooq.com/github-permission-denied-publickey/#1-github---how-to-fix-this-issue)
- nvm (v14.18.1 pinned to npm 6.14.15)

Then run:

```shell
   npm install
```

To setup development environment run `npm run develop`.
It will take a minute to build, but you can then view the site at <http://localhost:8000/> or go to <http://localhost:8000/___graphql> for an interactive graphql query maker.

## About the Project

This is the main website for Emergent Works. Target audiences are potential mentees/mentors/employees AND donors/grants/foundations. This is built in [React](https://reactjs.org/). We are using [Gatsby](https://www.gatsbyjs.com/docs/how-to/) to:

- Build the project
- Query for images and various config data (such at team information)
- Routing
- Local Development

Styles are done with [Sass](https://sass-lang.com/), [classnames](https://www.npmjs.com/package/classnames), and [css grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). We have a main style file (styles.scss), and modular scss files for styles specific to each page/component.

### Build

It's possible to build the application with SSL by running `npm run develop -- -S`. You can then access the site via SSL at <https://localhost:8000/> and view pages with components that require SSL (eg. the Virtuous form on the Donate page).

If images do not load properly after building the app, do the following run `gatsy clean` and rebuild the app with `npm run develop`.

### Linting/Formatting

We are using ESLint and prettier. Make sure you have the ESLint and prettier extensions for VSCode installed (or running with whatever IDE you are using) and enabled for this project. You can also use the `npm run format` command to format the whole project.

## Deploying the App

We use GitHub Actions, which will automatically build the site when you push to a branch, and will automatically build/deploy when a PR is merged with main. Typically we will do this over a manual deploy, however, if you need to do a manual deploy you can using the instructions below.

### Prerequistes

To do this you must:

- Have s3 and cloudfront permission for the s3 bucket and cloudfront distribution. The specific bucket/distribution are in the .env file.
- Install the aws cli https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
  - If you have homebrew you can alternatley use 'brew install awscli'
- Get your AWS public key and secret access key, and set them up as explained here: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
  - To do this you may need to request those keys by emailing "devops@emergentworks.org"
  - Make sure to also set the config file in the .aws file, our region is 'us-west-1'

### Deploying Locally

We have a bash script to deploy the app, you can run it with 'npm run deploy'

Note, this will update the files in the s3 bucket, but will not invalidate the cache. After running the
deploy command run 'npm run update' to invalidate the cache and complete the update.

Also note: while the old version is deleted and the new images are not yet uploaded the website will use down-rezed cached versions (or none at all) of the images. This is a bug potentially work exploring and fixing.
