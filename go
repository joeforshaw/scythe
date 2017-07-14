#!/bin/bash

function usage()
{
  echo "Usage:"
  echo "    go -h          Display this help message."
  echo "    go install     Installs dependencies."
  echo "    go run         Run development server."
  echo "    go watch       Run webpack watch."
}

function run_server {
  http-server ./public
}

if [ "$1" == "run" ]; then
  run_server
elif [ "$1" == "install" ]; then
  yarn install
elif [ "$1" == "watch" ]; then
  npm run watch
else
  usage
fi
