#!/bin/bash
gatsby clean
gatsby build

# Copy the blog-redirect-page to the root of the public folder
cp redirect-to-blog.html public/blog.html

# For some reason, github uses the `docs` folder for publishing??
rm -Rf docs
cp -R public docs