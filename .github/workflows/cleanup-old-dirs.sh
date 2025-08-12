#!/bin/bash

set -e

echo "Fetching full git history to ensure correct date calculation..."
git fetch --unshallow --quiet
echo "History fetched."

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

      commit_date=$(git log -1 --format=%ct -- "$dir/." 2>/dev/null)

      if [[ -z "$commit_date" || ! "$commit_date" =~ ^[0-9]+$ ]]; then
        echo "Warning: Could not get a valid commit date for $dir. Skipping." >&2
        continue
      fi

      oldest_dirs+=("$dir")
      oldest_dates+=("$commit_date")

      current_date=$(date +%s)
      age_seconds=$((current_date - commit_date))
      days_stale=$((age_seconds / 86400))

      if [ "$days_stale" -gt 120 ]; then
        echo "Removing $dir (last commit was $days_stale days ago)"
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
  dir_name="${oldest_dirs[$index]}"
  dir_date="${oldest_dates[$index]}"
  if [[ -n "$dir_date" && "$dir_date" =~ ^[0-9]+$ ]]; then
    human_date=$(date -d @$dir_date '+%Y-%m-%d %H:%M:%S')
    echo "$dir_name - $human_date"
    count=$((count + 1))
  fi
  if [ $count -eq 3 ]; then
    break
  fi
done

echo "Cleanup completed"
