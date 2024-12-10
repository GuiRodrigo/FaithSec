#!/bin/sh


PATHSYNC=$(pwd)
IP=34.95.172.110
PORT=5022


while sleep 1; do


	find . -type d -name '_notes' -delete
	find . -name '*.DS_Store' -delete

	rsync -e"ssh -p$PORT" -rav --exclude "package-lock.json"  --exclude "sessions"   --exclude "node_modules" *   root@$IP:/blackpass-admin-web/
	#rsync -e"ssh -p$PORT" -rav       root@$IP:/blackpass-client-web/.env* .
	
	
done



