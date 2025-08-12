#!/bin/bash

set -e

checked_dirs=0
removed_dirs=0
oldest_dirs=()
oldest_dates=()

cleanup_dirs() {
  local path=$1
  echo "Checking directories in $path"

  for dir in "$path"/*; do
    if [ -d "$dir" ]; then
      checked_dirs=$((checked_dirs + 1))
      dir_date=$(stat -f "%m" "$dir")

      oldest_dirs+=("$dir")
      oldest_dates+=("$dir_date")

      if [ $(find "$dir" -type d -maxdepth 0 -mtime +120 | wc -l) -gt 0 ]; then
        rm -rf "$dir"
        removed_dirs=$((removed_dirs + 1))
      fi
    fi
  done
}

cleanup_dirs "./docs"
cleanup_dirs "./storybook"

sorted_indices=$(for i in "${!oldest_dates[@]}"; do echo "$i ${oldest_dates[$i]}"; done | sort -k2 -n | cut -d' ' -f1)

echo "$checked_dirs directories checked"
echo "$removed_dirs directories removed"
echo "Top 3 oldest directories:"
count=0
for index in $sorted_indices; do
  echo "${oldest_dirs[$index]} - $(date -r ${oldest_dates[$index]})"
  count=$((count + 1))
  if [ $count -eq 3 ]; then
    break
  fi
done

echo "Cleanup completed"
