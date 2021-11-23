#!/bin/bash
# exit when any command fails
set -e
source .env

build='false'
deploy='false'
invalidate_cache='false'


while getopts 'bcdh' flag; do
  case "${flag}" in
    b) build='true' ;;
    d) deploy='true' ;;
    c) invalidate_cache='true' ;;
    h) echo "Use -b to build the project, use -d to deploy to s3, use -c to invalidate the cloudfront cache"
        exit 1 ;;
  esac
done

# Build the new website into the 'public' folder
if ${build}; then
echo "Building"
npm run build
fi

if ${deploy}; then
echo "Deploying"
# Delete old contents of the s3 buckets
aws s3 rm $s3_bucket_url --recursive

# # Upload the new website
aws s3 cp ./public $s3_bucket_url --recursive

# # Print the url where you can find it
echo 'You can check out the website here: https://s3.us-west-1.amazonaws.com/emergentworks.org/index.html'
echo 'Note that it will not look great because it does not have access to images, subdirectories, etc.'
echo "If you aren't invalidating the cache you'll need to do that to make the site live"
fi

if ${invalidate_cache}; then
echo "Invalidating cache"
aws cloudfront create-invalidation --distribution-id $distribution_id --paths '/*'
fi
