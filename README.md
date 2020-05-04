# calculator-app

## About

This project is a simple calculator app supporting basic operations: addition, subtraction, multiplication and division. I split the source code into two packages ([app](./packages/app) and [core](./packages/core)) to show separation between UI and logic layer.

The UI part is a basic [**Next.js**](https://www.npmjs.com/package/next) application deployed to [**Heroku**](https://calculator-app-demo.herokuapp.com/) as a [**Docker**](https://www.docker.com/) container.

To force high quality of the code, I used [ESLint](https://www.npmjs.com/package/eslint) integrated as a pre-commit hook and also run on CI (Github Actions). Unit tests are run using [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/).

The app is automatically deployed when changes are merged to master branch via pull request.

## Prerequisites

- **Yarn** 1.15 or newer
- **Node** 13.11.0

_It's important to use Yarn instead of NPM, because we use Yarn Workspaces not supported by NPM._

## Development

Setting up the project and starting dev server:

```bash
# Install and link dependencies
> yarn

# Run build process in packages that need compilation steps to work
> npx lerna run lib

# Run web app in development mode
> (cd packages/app && yarn dev)
```

## Production

Building production docker image and running it locally:

```bash
# Build image
> docker build -t calculator-app .

# Run a container with port forwarding
> docker run --rm --env PORT=80 -p 3000:80 calculator-app
```
