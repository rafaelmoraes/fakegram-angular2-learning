# Fakegram Angular 2 learning

> This repository is only to me learning [Angular 2](https://v2.angular.io/docs/ts/latest/). =]

## Setup with Node.js and npm.

Install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) package manager.


## Setup with Docker and Docker Compose.
Install [docker](https://www.docker.com/community-edition#/download) and [docker-compose](https://docs.docker.com/compose/install/), wait the install process finish, so execute in your terminal:
```bash
# Build docker images, this command is only necessary at first time
sudo docker-compose build
```

```bash
# Start required containers
sudo docker-compose up -d
```

Execute the commands below to start the API webserver.
```bash
sudo docker-compose exec fakegram-angular2 bash

cd server

npm install

npm start
```

Now you need to start the Angular 2 client server.
```bash
sudo docker-compose exec fakegram-angular2 bash

cd client

npm install

npm start
```

If everything went well, you can access the application in your web browser: [http://localhost:3000](http://localhost:3000).

For stop and remove the container execute the command below:
```bash
sudo docker-compose down
```
