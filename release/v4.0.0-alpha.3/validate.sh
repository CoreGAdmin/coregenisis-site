#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
cd "$HOME/coreg-work/coregenisis-site"
npm install
npm run lint
npm run build
echo
echo "CoreG v4.0.0-alpha.3 validation passed."
