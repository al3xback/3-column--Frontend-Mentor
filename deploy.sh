#!/usr/bin/env sh

set -e
npm run build
cd dist

git init
git add -A
git commit -m 'deploy new'
git branch -m main
git push -f git@github.com:al3xback/3-column-vue-FM.git main:gh-pages

cd -
