# Candy store app.

This is candy store app.

## Design Points

This project is a combo of a React UI app and a node server.

  1. [**Node server**](server/): [`server/package.json`](backend/package.json)
  2. [**Vue UI**](client/): [`client/package.json`](client/package.json)


## Local Development

As matter to make things easier this project is dockerized and runs by this simple command:

```bash
docker-compose up --build
```

If you still don't have docker-compose installed follow the [link](https://docs.docker.com/compose/install/)

In case you want to do the harder way follow the steps:


### Run the API server

In a terminal:

```bash
# Go to server folder
cd backend/

# Initial setup
npm install

# Start the server
npm start
```

### Run the Vue UI

This Vue app has a proxy configuration to handle backend requests to the local Node server. [`"proxy"` config](client/package.json)


Open a new terminal tab from the API server and start the UI:

```bash
# Change directory, first
cd client/

# Initial setup
npm install

# Start the server
npm run serve
```
