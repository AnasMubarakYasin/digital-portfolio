#!/bin/sh
set -e

echo "=== Running seeder ==="
cd /app/instance && go run database/seeder/main.go --mode=reset

echo "=== Starting supervisor ==="
exec supervisord -n -c /etc/supervisor/supervisord.conf

echo "=== Status supervisor ==="
exec supervisorctl status