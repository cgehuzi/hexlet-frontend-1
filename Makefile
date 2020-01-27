install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

even:
	npx babel-node src/bin/brain-even.js

build:
	npm run build

publish:
	npm publish --dry-run

lint:
	npx eslint .