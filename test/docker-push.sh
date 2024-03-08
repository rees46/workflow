CHANGED_FILES="packages/api-service/src/ApiWorker.php packages/core/test/autoload.php packages/import-service/test/autoload.php"

REPOSITORY_OWNER=rees46

PACKAGES=($(echo "$CHANGED_FILES" | tr ' ' '\n' | grep 'packages/' | awk -F'/' '{print $2}' | uniq))
echo "Trying to build $PACKAGES"
for package in $PACKAGES
do
  echo "Building $package..."
  if [ -f "./docker/Dockerfile-$package" ]; then
    echo "🔎🔎🔎  Found Dockerfile for $package"
    image_name=ghcr.io/$REPOSITORY_OWNER/package-$package:latest
    docker build -f docker/Dockerfile-$package . -t $image_name
    echo $GITHUB_TOKEN | docker login ghcr.io -u $REPOSITORY_OWNER --password-stdin
    docker push $image_name
    echo "✅✅✅  Pushed successfully $image_name"
  else
    echo "❎❎❎  No Dockerfile for $package found, skipping"
  fi
done
