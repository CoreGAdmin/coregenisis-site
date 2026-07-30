#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

SOURCE_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
TARGET_DIR="$HOME/coreg-work/coregenisis-site"
BACKUP_ROOT="$HOME/coreg-work/.coreg-backups"
STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="$BACKUP_ROOT/pre-v4-alpha3-$STAMP"

pkg install -y rsync >/dev/null
mkdir -p "$BACKUP_ROOT" "$(dirname "$TARGET_DIR")"

if [ -d "$TARGET_DIR" ]; then
  mkdir -p "$BACKUP_DIR"
  rsync -a \
    --exclude node_modules \
    --exclude dist \
    --exclude .git \
    --exclude .update-backups \
    --exclude .release-backups \
    "$TARGET_DIR/" "$BACKUP_DIR/"
fi

mkdir -p "$TARGET_DIR"
rsync -a --delete \
  --exclude node_modules \
  --exclude dist \
  --exclude .git \
  --exclude .update-backups \
  --exclude .release-backups \
  "$SOURCE_DIR/" "$TARGET_DIR/"

rm -rf "$TARGET_DIR/.update-backups" "$TARGET_DIR/.release-backups"

echo
echo "Installed CoreG Website v4.0.0-alpha.3 into:"
echo "$TARGET_DIR"
echo "Backup created at:"
echo "$BACKUP_DIR"
echo
echo "Validate with:"
echo "bash $TARGET_DIR/release/v4.0.0-alpha.3/validate.sh"
