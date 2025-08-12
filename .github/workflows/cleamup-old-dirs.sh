#!/bin/bash

set -e

find ./docs/* -type d -maxdepth 0 -mtime +120 -exec rm -rf {} +
find ./storybook/* -type d -maxdepth 0 -mtime +120 -exec rm -rf {} +

echo "Removed old directorys"
