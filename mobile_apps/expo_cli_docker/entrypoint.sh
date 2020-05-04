#!/bin/sh

set -e

# authenticate without showing password
if [ -n "$EXPO_CLI_USERNAME" ] && [ -n "$EXPO_CLI_PASSWORD" ]; then
	expo-cli login --non-interactive --username $EXPO_CLI_USERNAME
fi

# see: https://github.com/nodejs/docker-node/blob/4a29572/12/stretch/docker-entrypoint.sh#L4-L6
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
	set -- expo-cli "$@"
fi

exec "$@"
