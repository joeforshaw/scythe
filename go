#!/bin/bash

function usage()
{
  echo "Usage:"
  echo "    go -h          Display this help message."
  echo "    go run         Run development server."
}

function run_server {
  http-server ./public
}

if [ "$1" == "run" ]; then
  run_server 
else
  usage
fi
