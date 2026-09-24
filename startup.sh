#!/bin/sh
set -e

echo "=== Running seeder ==="
cd instance && go run database/seeder/main.go --mode=reset

echo "=== Starting supervisor ==="
exec supervisord -n -c /etc/supervisor/supervisord.conf