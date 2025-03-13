#!/bin/sh
if [ ! -f version.properties ]; then
  echo "version.properties not found"
  exit 1
fi

grep "^VERSION_CODE=" version.properties | cut -d'=' -f2
