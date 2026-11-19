#!/bin/bash
# Copy all files from public/ to out/ after Next.js static export.
# Next.js only copies public files that are statically referenced in code.
# Dynamic references (from JSON dictionaries) are not detected, so we copy them manually.

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$PROJECT_DIR/public"
OUT_DIR="$PROJECT_DIR/out"

if [ ! -d "$PUBLIC_DIR" ]; then
  echo "public/ directory not found, skipping."
  exit 0
fi

if [ ! -d "$OUT_DIR" ]; then
  echo "out/ directory not found, skipping."
  exit 0
fi

echo "Copying public assets to out/..."
cp -r "$PUBLIC_DIR"/. "$OUT_DIR"/
echo "Done."
