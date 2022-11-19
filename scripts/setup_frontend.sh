#!/bin/bash

pushd $(pwd) >> /dev/null

readonly SCRIPT_DIR="$( cd "$( dirname "$0" )" && pwd )"
readonly FRONTEND_DIR=${SCRIPT_DIR}/../frontend

cd $FRONTEND_DIR
deno task start

popd >> /dev/null
