dev:
	npm run dev

after-develop-merged:
	git switch main
	git pull --prune
	git branch --delete develop
	git switch --create develop

clean:
	rm -r .next/
	rm -r node_modules/

init:
	npm install

open:
	gh repo view --web

switch:
	git switch --create develop
