#!/bin/bash
# exit when any command fails
set -e

# Build the new website into the 'public' folder
gatsby build

# Delete old contents of the s3 buckets
aws s3 rm s3://emergentworks.org/ --recursive

# Upload the new website
aws s3 cp ./public s3://emergentworks.org/ --recursive

# Print the url where you can find it
echo 'You can check out the website here: https://s3.us-west-1.amazonaws.com/emergentworks.org/index.html'
echo 'Note that it will not look great because it does not have access to images, subdirectories, etc.'
echo "To complete this you will need to invalidate the cache, by running 'npm run update'"
