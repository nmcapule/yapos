#!/bin/bash

docker run \
    --rm -p 8080:8080 \
    -it $(docker build -q .)
