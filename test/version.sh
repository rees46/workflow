PRIVATE=true

DEFERRED=false

STRATEGY="patch"

if [ $PRIVATE == false ]; then
  PRIVATE_FLAG="--no-private"
fi

if [ $DEFERRED == true ]; then
  DEFERRED_FLAG="--deferred"
  else
  DEFERRED_FLAG="--immediate"
fi

COMMAND="yarn version $STRATEGY $DEFERRED_FLAG $PRIVATE_FLAG"

echo $COMMAND

$COMMAND
