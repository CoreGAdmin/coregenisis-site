#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

REPO_DIR="$HOME/coreg-work/coregenisis-site"
cd "$REPO_DIR"

npm install
npm run lint
npm run build

echo
echo "CoreG v4.0.0-alpha.2 validation passed."
