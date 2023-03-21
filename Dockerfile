FROM node:16 

WORKDIR /app

COPY ./package.json /app

RUN npm install -g npm@9.6.2

COPY . /app

RUN npm run build 