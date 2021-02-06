FROM node:14-alpine

# Semantic Version: Major.Minor.Patch
# Version: 1.0.0

RUN mkdir -p /usr/src/app

# https://github.com/jwilder/dockerize
# https://medium.com/@marcelorlima/how-to-easily-make-your-container-waits-for-another-one-to-get-up-with-dockerize-be392e4e8e23
RUN apk add --no-cache openssl

# Create app directory
WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# build the React app.
RUN npm run build

# https://create-react-app.dev/docs/deployment/
# RUN npm install -g serve
RUN npm install --global http-server

# CRA = port 3000 / serve = port 5000
EXPOSE 3000 

# I think this cmd gets overriden by the docker compose yaml script.
CMD dockerize -wait tcp://feat13319:3030 npm start

