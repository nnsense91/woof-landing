#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

echo > .nojekyll

git init
git checkout -B main
git add .
git commit -m 'deploy'

git push -f git@github.com:nnsense91/woof-landing.git main:gh-pages

cd -