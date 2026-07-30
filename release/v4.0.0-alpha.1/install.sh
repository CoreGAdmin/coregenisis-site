#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

SOURCE_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
TARGET_ROOT="$HOME/coreg-work/coregenisis-site"
BACKUP_ROOT="$HOME/coreg-work/.coreg-backups"
STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="$BACKUP_ROOT/pre-v4-alpha1-real-$STAMP"

pkg install -y rsync >/dev/null
mkdir -p "$TARGET_ROOT" "$BACKUP_ROOT"

if [ -d "$TARGET_ROOT" ] && [ "$(find "$TARGET_ROOT" -mindepth 1 -maxdepth 1 -print -quit)" ]; then
  mkdir -p "$BACKUP_DIR"
  rsync -a \
    --exclude '.git/' \
    --exclude 'node_modules/' \
    --exclude 'dist/' \
    --exclude '.release-backups/' \
    --exclude '.update-backups/' \
    "$TARGET_ROOT/" "$BACKUP_DIR/"
fi

rsync -a --delete \
  --exclude '.git/' \
  --exclude 'node_modules/' \
  --exclude 'dist/' \
  --exclude '.release-backups/' \
  --exclude '.update-backups/' \
  "$SOURCE_ROOT/" "$TARGET_ROOT/"

printf '\nInstalled real-source CoreG v4.0.0-alpha.1 into:\n%s\n' "$TARGET_ROOT"
if [ -d "$BACKUP_DIR" ]; then printf 'Backup created at:\n%s\n' "$BACKUP_DIR"; fi
printf '\nValidate with:\nbash %s/release/v4.0.0-alpha.1/validate.sh\n' "$TARGET_ROOT"
