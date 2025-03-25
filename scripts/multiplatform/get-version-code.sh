#!/bin/sh
if [ ! -f version.properties ]; then
  echo "version.properties not found"
  exit 1
fi

version=$(grep "^VERSION_CODE=" version.properties | cut -d'=' -f2)
echo "VERSION_CODE: $version">&2
echo $version
