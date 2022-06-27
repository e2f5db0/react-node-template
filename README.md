# React-node template

A template for a React web application with node backend. Ready for deploying to Heroku.

## Development

Clone the repository

```bash
git clone <repository>
```

Create `.env` file in the root directory.

Define the necessary environment variables in `.env`.

Example contents of `.env`:

```

PORT=3001

```

Before running the app you need to install requirements:

```bash
> npm install
> cd ./frontend/
> npm install
```

## Available scripts (run in the root folder)

Run in development mode (nodemon):

```bash
> npm run dev
```

Build the production version (optimized)

```bash
> npm run build
```

Start the production server

```bash
> npm start
```

### Linting

Make sure to lint the code before trying to make PRs and fix all lint issues

```bash
> npm run eslint
```

### Testing

Run unit tests (jest)

```bash
> npm run test
```

Run end-to-end tests (cypress)

```bash
> npm run test:e2e
```

e2e interactive mode

```bash
> npm run cypress:open
```
