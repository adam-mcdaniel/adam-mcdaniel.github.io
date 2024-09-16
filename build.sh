#!/bin/zsh
. $NVM_DIR/nvm.sh

nvm use 18
npm i -g gatsby-cli 

gatsby clean
gatsby build

# For some reason, github uses the `docs` folder for publishing??
rm -Rf docs
cp -R public docs