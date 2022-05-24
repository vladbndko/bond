clean:
	rm -rf dist

install:
	npm ci

dev:
	cross-env NODE_ENV=development; npm start

build:
	cross-env NODE_ENV=production; npm run build
