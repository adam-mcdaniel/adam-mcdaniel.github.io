#!/bin/bash
gatsby clean
gatsby build

# For some reason, github uses the `docs` folder for publishing??
rm -Rf docs
cp -R public docs