# mckinsey-demo

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
> docker build -t mckinsey-demo .

# Run a container with port forwarding
> docker run --rm --env PORT=80 -p 3000:80 mckinsey-demo
```
