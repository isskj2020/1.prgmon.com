#!/bin/bash

rm -rf out

npm run build

npx serve out
