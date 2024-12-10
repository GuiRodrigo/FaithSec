#!/bin/sh


PATHSYNC=$(pwd)
IP=pve2.mycore.dev.br
PORT=4020


while sleep 1; do

	find . -type d -name '_notes' -delete
	find . -name '*.DS_Store' -delete

	rsync -e"ssh -p$PORT" -rav --exclude ".env*"  --exclude "sessions"   --exclude "node_modules" *   root@$IP:/blackpass-admin-web/
	
done



