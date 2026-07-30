#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"
npm install
npm run lint
npm run build
printf '\nCoreG v4.0.0-alpha.1 validation passed.\n'
