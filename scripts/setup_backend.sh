#!/bin/bash

pushd $(pwd) >> /dev/null

readonly SCRIPT_DIR="$( cd "$( dirname "$0" )" && pwd )"
readonly BACKEND_DIR=${SCRIPT_DIR}/../backend

readonly REMOTEPKG=https://github.com/pocketbase/pocketbase/releases/download/v0.8.0/pocketbase_0.8.0_linux_amd64.zip
readonly LOCALPKG=${BACKEND_DIR}/pocketbase.zip
readonly POCKETBASE=${BACKEND_DIR}/pocketbase

function setup_pocketbase() {
    mkdir -p ${BACKEND_DIR}
    wget ${REMOTEPKG} -O ${LOCALPKG}
    unzip ${LOCALPKG} -d ${BACKEND_DIR}
}

test -f ${POCKETBASE} || setup_pocketbase

cd ${BACKEND_DIR}
${POCKETBASE} serve --http 0.0.0.0:8090 --debug

popd >> /dev/null
