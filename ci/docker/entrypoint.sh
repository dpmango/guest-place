#!/usr/bin/env sh

yarn install
yarn run build
HOST=0.0.0.0 PORT=3000 NODE_ENV=production yarn start
