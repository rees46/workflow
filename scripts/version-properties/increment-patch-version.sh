#!/bin/sh
if [ ! -f version.properties ]; then
  echo "version.properties not found"
  exit 1
fi

VERSION_CODE=$(grep "^VERSION_CODE=" version.properties | cut -d'=' -f2)
VERSION_NAME=$(grep "^VERSION_NAME=" version.properties | cut -d'=' -f2)

IFS='.' read -r MAJOR MINOR PATCH <<EOF
$VERSION_NAME
EOF

NEW_PATCH=$((PATCH + 1))
NEW_VERSION_NAME="${MAJOR}.${MINOR}.${NEW_PATCH}"

NEW_VERSION_CODE=$((VERSION_CODE + 1))

sed -i.bak "s/^VERSION_CODE=.*/VERSION_CODE=${NEW_VERSION_CODE}/" version.properties
sed -i.bak "s/^VERSION_NAME=.*/VERSION_NAME=${NEW_VERSION_NAME}/" version.properties

echo "Updated version: ${NEW_VERSION_NAME} (code: ${NEW_VERSION_CODE})"
